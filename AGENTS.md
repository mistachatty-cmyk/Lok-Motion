# AGENTS.md — Lok Motion Developer Guide

## Architecture (v3.0+)

Three ES module files, no build step:

| File | Role | Lines |
|---|---|---|
| `index.html` | App shell — HTML, CSS, layout, viewport gate, drawer, nav, grid, settings, The Archive | ~960 |
| `lok-components.js` | Component database — all 130+ demos, catalog, brand data, font data | ~2350 |
| `lok-rotator.js` | Standalone brand rotator (3KB, zero-dependency, MIT) | 333 |

All loaded via `<script type="importmap">` and `<script type="module">` with ES module `import`.

### How to serve

```bash
python3 -m http.server 8080   # or: npx serve .
```

ES modules require a local server — `file://` won't work.

---

## File Structure — index.html

### CSS (inline `<style>` block)
- `:root` variables: colors, fonts, spacing
- Layout: `.app` grid (244px rail + 1fr main)
- Components: `.card`, `.stage`, `.drawer`, `.pbox`, `.chip`, `.navb`
- **The Archive**: `.archover`, `.archover.on`, `.archover.unlocked`

### HTML body structure
1. Rail (sidebar): brand, nav scroll, status with Lok Origin note, GitHub link
2. Main bar: search input, buttons, filter chips
3. Hero section: heading, stats, showreel button
4. Grid: `#sections` (component cards), `#libs` (library catalog)
5. Promo: rotating ad, Lok Rotator download
6. Footer: links, credits
7. Drawer: component detail panel
8. Archive overlay: hidden, triggered by secret key sequence
9. Toast: notification

### JS app logic (inline `<script type="module">`)
- **State variables**: `TEXT`, `FILTER`, `FAVONLY`, `CUR`, `EDIT`, `archUnlocked`, `archSeq`
- **Core functions**: `mountStage()`, `unmountStage()`, `scopeCSS()`, `sync()`
- **UI functions**: `buildNav()`, `buildChips()`, `buildGrid()`, `buildLibs()`, `openD()`, `closeD()`
- **Archive**: keydown listener for `iloveyoumerci`, overlay unlock animation

---

## Component Schema

Each entry in `LIB` (in `lok-components.js`):

```js
{
  id: 'my-effect',       // unique kebab-case
  name: 'My Effect',      // display name
  cat: 'text',            // text|reveal|scroll|surface|control|loader|ambient|shader|three|physics|media|experimental
  eng: 'css',             // css|anime|gsap|motion|gl|three|matter
  txt: 1,                 // 1 = renders user's word
  img: 0,                 // 1 = uses uploaded image
  tags: ['loop','stagger','archive'],  // 'archive' = hidden in The Archive
  css: `.s { ... }`,      // auto-scoped per instance
  js: `root.innerHTML=...;` // executed with scope vars
}
```

### Scope variables in `js`
- `root` — preview container (display:contents)
- `text` — the user's typed word
- `eng` — loaded engine module (null for css/gl)
- `esc(s)` — HTML-escape helper
- `chars(t)` — splits text into `<i>` elements with stagger `--i`
- `img` — uploaded image data URL
- `onStop(fn)` — **mandatory** for any rAF/interval/tween cleanup
- `DPR` — device pixel ratio capped at 2

### CSS scoping
- Selectors prefixed with per-instance ID (`#lm123 .s`)
- `@keyframes` namespaced (`spin_lm123`)
- Done via `scopeCSS()` in index.html

---

## Lok Origin Filter

A cross-cutting filter that shows only self-contained components (no external engine).

- **Filter value**: `FILTER === 'origin'`
- **Match logic**: `x.eng === 'css' || x.eng === 'gl'` (87 of 130)
- **Nav position**: Filters section in sidebar
- **Chip position**: Right after "All" in the top chip bar
- **Banner**: Shows when Origin filter is active

**Rules**:
- Never hardcode the 87 IDs — always derive from engine type
- Never use "CDN" in UI copy
- Origin filter is about dependency footprint, not quality

---

## The Archive

A hidden section unlocked by typing `iloveyoumerci` in sequence (Konami-code style).

### Implementation
- Global `keydown` listener builds a buffer, compares against `ARCHIVE_CODE`
- On match: full-screen overlay appears with "LOCKED" in red
- After 600ms: transitions to green/blue calm state
- After 3.4s: overlay fades, toast notification, nav item appears
- `archUnlocked` boolean persists for session only (no localStorage)

### Nav & UI
- "The Archive" nav button appears under a new "Archives" section
- Filter shows only components with `tags: ['archive']`
- Chip "The Archive" appears in the chip bar after unlock

### Adding archive components
Add entries to `ARCHIVE_LIB` in `lok-components.js` with `tags: ['archive']`.
They auto-include in `LIB` via spread.

---

## ES Module Pattern

All modules use ES `export`/`import`:

```js
// lok-components.js
export const BRANDS = [...];
export const LIB = [...];

// index.html
import { BRANDS, LIB } from './lok-components.js';
```

`lok-rotator.js` is already a standalone ES module with `export default LokRotator`.

---

## Hotfix Protocol

All changes must be documented in this file and MASTER-ROADMAP.md.

1. Describe the issue
2. Identify the file and line
3. Apply the fix
4. Update this file with the change
5. Update MASTER-ROADMAP.md change log

### Hotfix: Import error broke entire app — sidebar + grid missing (Jul 2026)
- **Issue**: Left sidebar, grid, and all UI disappeared; page showed blank shell
- **Root cause**: Line 799 `import { ... _LIB, ... }` — `_LIB` is not an export of `lok-components.js` (exports `LIB`). ES module import failed silently, blocking all JS execution
- **File & lines**: `index.html:799`
- **Fix**: Changed to `import { LIB as ORIG_LIB, ... }` — uses correct ES module rename syntax
- **Also**: `_LIB` references in creator JS changed to `ORIG_LIB`

### Hotfix: Half-word rendering on text change (Jul 2026)
- **Issue**: When text changed via rotator or typing, engine-based components (anime, gsap, motion, three, matter) showed half or broken words
- **Root cause**: `refreshText()` re-executed component JS with `eng=null` for ALL components. Engine-based components received `null` instead of their loaded engine module, silently failing in the try/catch
- **File & lines**: `index.html:1603-1608`
- **Fix**: Added `hEng = h._comp.eng === 'css' || h._comp.eng === 'gl' ? null : (ENG[h._comp.eng] || null)` — passes the correct engine module to the re-executed JS
- **Also fixed**: Same pattern for the drawer preview stage (line ~1613)
