 # Lok Motion

**See any animation library running your own words — before you install it.**

130 live, editable animation demos across seven engines. Real libraries load from their
own CDNs and run their actual APIs. No build step, no bundler, no `npm install`.

A [Lok Services](https://github.com/mistachatty-cmyk) property. Built in Chattanooga.

---

## What it does

- **Type once, everything re-renders.** 85 of the 130 demos take your text. Type `TRYL` and every kinetic-text effect runs your brand at once.
- **Seven engines side by side.** CSS native · Anime.js · GSAP · Motion · Canvas/WebGL · Three.js · Matter.js — colour-coded and filterable.
- **Upload your own image.** Six demos accept it — 3D photo plane, particle dissolve, duotone, glitch, tilt, mask reveal.
- **Edit live.** Every demo exposes its real JS and CSS. Change the Anime.js call, hit Run, watch it. CSS updates as you type.
- **Star your favorites.** Persisted locally; filter to just yours.
- **Copy runnable output.** Produces a self-contained snippet with the CDN import and attribution header wired.
- **162 third-party components catalogued** across 11 libraries, each deep-linked to the vendor's own docs.
- **Package manager tabs.** npm / pnpm / yarn / bun / CDN — every command rewrites live.

## Performance architecture

This is the part that matters at 130 demos.

**Demos only exist while they're near the viewport.** An `IntersectionObserver` mounts a
component when it comes within 240px of the screen and tears it down completely when it
leaves. That keeps roughly 6–10 animations live at any moment instead of 130.

Every demo that starts a `requestAnimationFrame` loop, an interval, a physics runner, or a
WebGL context **must** register a teardown via `onStop(fn)`. The unmounter runs them all.
This is enforced — a leaked loop would compound on every scroll.

Other measures:
- **Device pixel ratio capped at 2.** A 3× phone would otherwise render 9× the pixels.
- **Paused on tab hide** via `visibilitychange`.
- **Text changes remount only text-aware, currently-mounted demos** — not the whole grid.
- Particle counts scale to element width.

## Files

| File | Role |
|---|---|
| `index.html` | App shell — layout, viewport gate, drawer, favorites |
| `lok-components.js` | The 130-component database + library catalog |
| `lok-rotator.js` | Standalone brand rotator (MIT, sellable on its own) |

## Run it

No build step. No dependencies.

```bash
git clone https://github.com/mistachatty-cmyk/Lok-Motion.git
cd Lok-Motion
python3 -m http.server 8080     # or: npx serve .
```

Open `http://localhost:8080`. **A local server is required** — ES module imports don't work
over `file://`.

## Deploy

```bash
npx vercel --prod
```

Or import at [vercel.com/new](https://vercel.com/new): framework preset **Other**, no build
command, output directory `./`. `vercel.json` is already configured.

## Lok Rotator

The brand rotator in the search bar, extracted as a 3KB zero-dependency module.

```html
<span data-lok-rotate='["LOK SERVICES","TRYL","RUNEDIARY"]'
      data-effect="glitch" data-interval="3000"></span>
<script type="module">
  import { autoInit } from './lok-rotator.js';
  autoInit();
</script>
```

Nine transitions: `fade` `slide` `blur` `flip` `glitch` `scramble` `type` `wave` `split`.
Works on any element including input placeholders (`target: 'placeholder'`).
Respects `prefers-reduced-motion`. Programmatic API: `play()` `pause()` `next()` `set(i)` `destroy()`.

## Architecture

| Layer | What it is | Why |
|---|---|---|
| **Engines** | Anime.js, GSAP, Motion, Three.js, Matter.js from public CDNs | Always current, nothing to maintain, nothing redistributed |
| **Demos** | 130 original components written for Lok | Ours, MIT, the sellable asset |
| **Catalog** | 162 third-party components indexed by name + deep link | Full discoverability without rehosting a byte |

**We do not mirror third-party component source.** Not for Magic UI, React Bits, Kokonut,
or anyone else — that's a licensing problem, and it rots within a quarter as React and
Tailwind versions move. The catalog indexes and links instead, which is also how it can
grow to fifty libraries without adding maintenance.

### Adding a component

Append to `LIB` in `lok-components.js`:

```js
{
  id:'my-effect',            // unique, kebab-case
  name:'My Effect',
  cat:'text',                // text|reveal|scroll|surface|control|loader|
                             // ambient|shader|three|physics|media
  eng:'css',                 // css|anime|gsap|motion|gl|three|matter
  txt:1,                     // 1 = renders the user's word
  img:0,                     // 1 = uses the uploaded image
  tags:['loop','stagger'],
  css:`.s{ /* auto-scoped to this instance */ }`,
  js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`
}
```

**Scope:** `root` (preview element) · `text` (typed word) · `eng` (loaded engine, `null`
for CSS/Canvas) · `img` (image data URL) · `onStop(fn)` (**required** for any loop) ·
`esc` · `chars` · `DPR`.

CSS is auto-scoped per instance — selectors prefixed, `@keyframes` namespaced — so nothing
collides across cards.

### Adding a library

Append to `LIBS`. `fam` is `[familyName, [[componentName, deepLink], ...]]`.
Set `eng` only if the library actually loads on the page.

## Design system

Dark-mode-first technical minimalism. Mono is the dominant utility face — every label,
badge and nav item — with heavy Archivo at tight negative tracking for display.

| Token | Value |
|---|---|
| Background | `#0A0B0E` |
| Accent | `#5EEAD4` |
| Anime.js | `#FF6B9D` |
| GSAP | `#8BE84A` |
| Motion | `#8B7CFF` |
| Canvas/WebGL | `#FFB454` |

`prefers-reduced-motion` respected throughout.

## Roadmap

- [ ] `@lok` shadcn registry so `npx shadcn add @lok/glitch` resolves
- [ ] MCP server — install Lok components from Claude Code, Cursor, Antigravity, Codex
- [ ] React/JSX output alongside vanilla
- [ ] Shareable permalinks for edited components
- [ ] Free tier / paid full registry

## License

MIT for everything original. See [LICENSE](LICENSE) and [PROVENANCE.md](PROVENANCE.md).

Anime.js, GSAP, Motion, Three.js and Matter.js load from their public CDNs, are **not**
redistributed here, and remain the property of their authors under their own licenses.
Catalogued components are indexed by name and link only.

Entries marked **VERIFY** have unconfirmed license terms. Confirm before client work.
