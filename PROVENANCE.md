 # Provenance

Every component in Lok Motion is traceable. This file is the record.
Nothing enters the library without an entry here.

## Rule

> A component you cannot trace does not ship.

This is what makes the library sellable. Without it, you cannot prove to a client
or a buyer that the code is clean.

---

## Original components — 130

All 130 demos in `LIB` are **original code written for Lok Motion**. None are copied,
ported, or derived from another library's source. Licensed MIT.

| Engine | Count | Dependency | Redistributed? |
|---|---|---|---|
| CSS native | 67 | none | n/a |
| Canvas / WebGL | 20 | none (browser APIs) | n/a |
| Anime.js | 12 | `animejs@4` via jsDelivr CDN | **No** — loaded at runtime |
| GSAP | 10 | `gsap@3` via jsDelivr CDN | **No** — loaded at runtime |
| Motion | 9 | `motion@12` via jsDelivr CDN | **No** — loaded at runtime |
| Three.js | 7 | `three@0.160` via jsDelivr CDN | **No** — loaded at runtime |
| Matter.js | 5 | `matter-js@0.20` via jsDelivr CDN | **No** — loaded at runtime |

`lok-rotator.js` is original, zero-dependency, MIT.

The 43 engine-backed demos call public APIs of libraries the user's browser loads
directly from the vendor's CDN. That is the intended, documented use of those CDNs.
No engine source is vendored into this repository.

Effect *categories* (blur-in, glitch, shimmer, marquee, spotlight, etc.) are common
web-animation techniques implemented independently here. Category names are descriptive,
not derivative.

---

## Catalogued libraries — 11, 162 components

Indexed by **name and deep link only**. No source is included, mirrored, cached, or
rehosted. Clicking a catalog pill opens the vendor's own documentation page.

| Library | License status | Verified |
|---|---|---|
| Anime.js | MIT | ✅ |
| Motion | MIT | ✅ |
| Lenis | MIT | ✅ |
| Three.js | MIT | ✅ |
| shadcn/ui | MIT | ✅ |
| Magic UI | MIT | ✅ |
| Three.js | MIT | ✅ |
| Matter.js | MIT | ✅ |
| GSAP | Reported free under Webflow | ⚠️ **VERIFY** |
| React Bits | — | ⚠️ **VERIFY** |
| Kokonut UI | — | ⚠️ **VERIFY** |
| Aceternity UI | — | ⚠️ **VERIFY** |

### Open items

- **GSAP** — confirm current commercial terms in writing before any paid client deliverable.
- **React Bits / Kokonut UI / Aceternity UI** — read each repository's LICENSE file and record it here.
- Catalog component lists are a **snapshot**. Vendors add and rename components; re-check quarterly against each vendor's live index.

---

## Fonts

Archivo and JetBrains Mono, served by Google Fonts. Both are SIL Open Font License.

## Adding an entry

When a component joins `LIB`, add a row here recording: origin (original / adapted),
the engine it depends on, and — if adapted from anything — what was changed and the
upstream license. No exceptions.
