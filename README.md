# Lok Motion

**See any animation library running your own words — before you install it.**

A single-file, zero-build component lab. Real engines load live from their own CDNs,
57 original demos run against their actual APIs, and every one is editable in place.

A [Lok Services](https://github.com/mistachatty-cmyk) property. Built in Chattanooga.

---

## What it does

- **Type once, everything re-renders.** 43 of the 57 demos take your text. Type `TRYL` and watch every kinetic-text effect run your brand simultaneously.
- **Five engines side by side.** CSS native, Anime.js, GSAP, Motion, Canvas/WebGL — colour-coded and filterable.
- **Edit live.** Every demo exposes its real JS and CSS. Change the Anime.js call, hit Run, see it. CSS updates as you type.
- **Export your edits.** One button dumps every component you modified to a text file.
- **Copy runnable output.** "Copy all" produces a self-contained snippet with the CDN import and attribution header already wired.
- **Catalog 141 third-party components.** Every entry deep-links to the vendor's own docs page.
- **Package manager tabs.** npm / pnpm / yarn / bun / CDN — every command rewrites live.

## Run it

No build step. No dependencies. No install.

```bash
git clone https://github.com/mistachatty-cmyk/Lok-Motion.git
cd Lok-Motion
python3 -m http.server 8080     # or: npx serve .
```

Open `http://localhost:8080`. Opening `index.html` directly with `file://` also works,
though some browsers restrict ES module imports over that protocol.

## Deploy

**Vercel** — the whole project is one static file.

```bash
npx vercel --prod
```

Or import the repo at [vercel.com/new](https://vercel.com/new). No framework preset,
no build command, output directory `.`. `vercel.json` is already configured.

## Architecture

Three layers, and the separation is deliberate.

| Layer | What it is | Why |
|---|---|---|
| **Engines** | Anime.js, GSAP, Motion loaded from public CDNs at runtime | Always current, nothing to maintain, nothing redistributed |
| **Demos** | 57 original components written for Lok | Ours, MIT, the sellable asset |
| **Catalog** | 141 third-party components indexed by name + deep link | Full discoverability without rehosting a byte |

**We do not mirror third-party component source.** Not for Magic UI, React Bits,
Kokonut, or anyone else. That would be a licensing problem and it would rot within
a quarter as React and Tailwind versions move. The catalog indexes and links instead —
which is also how you can grow it to fifty libraries without adding maintenance.

### Adding a component

Append to the `LIB` array in `index.html`:

```js
{
  id:'my-effect',            // unique, kebab-case
  name:'My Effect',
  cat:'text',                // text | reveal | scroll | surface | control | loader | ambient | shader
  eng:'css',                 // css | anime | gsap | motion | gl
  txt:1,                     // 1 = renders the user's typed word, 0 = geometry only
  tags:['loop','stagger'],
  css:`.s{ /* scoped automatically to this preview */ }`,
  js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`
}
```

**Demo scope:** `root` (the preview element), `text` (the typed word), `eng` (the loaded
engine, or `null` for CSS/Canvas), `esc` (HTML escaper), `chars` (per-character `<i>` splitter
with `--i` index set for stagger delays).

CSS is auto-scoped per instance — selectors are prefixed and `@keyframes` names are
namespaced, so nothing collides across cards.

**Canvas/WebGL demos must set `root._stop`** to a teardown function. The grid calls it
on every re-render, which is what keeps `requestAnimationFrame` loops from stacking up.

### Adding a library to the catalog

Append to `LIBS`. `fam` is an array of `[familyName, [[componentName, deepLink], ...]]`.
Set `eng` only if the library is one of the three that actually loads on the page.

## Design system

Dark-mode-first technical minimalism. Mono is the dominant utility face — every label,
badge, and nav item — with heavy Archivo at tight negative tracking for display.

| Token | Value |
|---|---|
| Background | `#0A0B0E` |
| Accent | `#5EEAD4` |
| Anime.js | `#FF6B9D` |
| GSAP | `#8BE84A` |
| Motion | `#8B7CFF` |
| Canvas/WebGL | `#FFB454` |

Every component ships with `prefers-reduced-motion` respected.

## Roadmap

- [ ] `@lok` shadcn registry so `npx shadcn add @lok/glitch` resolves
- [ ] MCP server — install Lok components from Claude Code, Cursor, Antigravity, Codex
- [ ] React/JSX output alongside vanilla
- [ ] Persistent edits + shareable permalinks
- [ ] Free tier / paid full registry

## License

MIT for everything original here. See [LICENSE](LICENSE) and [PROVENANCE.md](PROVENANCE.md).

Anime.js, GSAP and Motion load from their public CDNs, are **not** redistributed by
this project, and remain the property of their authors under their own licenses.
Catalogued components are indexed by name and link only.

Entries marked **VERIFY** in the catalog have unconfirmed license terms.
Confirm before using in client work.
