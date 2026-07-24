# MASTER ROADMAP — Lok Motion v3.0+

**Owner:** Eric — Lok Services
**Last updated:** July 2026

---

## Phase 0: Bug Fixes & Polish (COMPLETED)

| # | Fix | File | Status |
|---|---|---|---|
| 0.1 | Card "Open →" interaction reliability | `index.html` | Done — CTA styled as button, pointer-events improved |
| 0.2 | Dot animation too intense | `index.html` | Done — 4s pulse, softer shadow, wrapper div |
| 0.3 | Show reel engine check | `index.html` | Done — checks engines loaded before starting |
| 0.4 | Interaction effects broken (hover demos) | `index.html` | Done — stage pointer-events, CTA z-index |
| 0.5 | Modularized into ES modules | `index.html`, `lok-components.js` | Done — extracted component DB, external imports |

## Phase 1: Foundation (COMPLETED)

### 1.1 ES Module Extraction
- Extracted `lok-components.js` — all component data, BRANDS, ADS, LIBS, PKGS with exports
- `index.html` imports `lok-rotator.js` and `lok-components.js` as external modules
- No build step, single-file shell preserved

### 1.2 Lok Origin Filter
- Nav button in Filters section showing count of self-contained components
- Chip "Lok Origin" in top chip bar (right after "All")
- `match()` logic: `x.eng === 'css' || x.eng === 'gl'` (87 components)
- Banner above grid when Origin filter is active
- Lok Origin doc notation in rail sidebar status area
- Never hardcodes IDs — always derived from engine type
- No "CDN" word in UI copy

### 1.3 The Archive (secret feature)
- Konami-code style key listener for `iloveyoumerci` typed anywhere
- Full-screen "LOCKED" overlay with red aura → transitions to calm green/blue
- 5 hidden archive components (Spectral Analyzer, Morph Grid, Cursor Realm, Thread Veil, Vision Pulse)
- Nav item "📦 The Archive" appears under Archives section after unlock
- Chip "The Archive" appears in chip bar after unlock
- Unlock persists for session only (no localStorage)

## Phase 2: Depth (NEXT)

### 2.1 Full-Screen Component Detail Pages
- Each component opens to full-page view instead of drawer
- Larger preview stage (400px+)
- Color adjusters: Simple mode (HSL sliders) + Advanced mode (full CSS picker)
- Timing controls: Duration, delay, stagger, easing dropdowns
- Font picker dropdown per component
- Live code editing with instant preview feedback

### 2.2 Color System Overhaul
- CSS custom properties per component that can be overridden
- Global `--user-hue`, `--user-sat`, `--user-lit` variables
- Per-component color overrides saved to localStorage
- Color picker tool in Experimental category

### 2.3 Timing & Sync Improvement
- Add `params` field to component schema: `{duration, delay, stagger, easing}`
- Global timing slider panel for all visible components
- Standardized animation timing for sync across components

## Phase 3: Font System & Settings

### 3.1 Font Selector
- Global font bar under searchbar — compact badge → searchable font picker overlay
- Per-component font override in detail view
- 50-100 curated free fonts from Google Fonts, Font Squirrel, Open Font Library
- Each entry: name, designer, license, source URL, variants

### 3.2 Settings Panel
- Gear icon in nav → settings drawer
- Toggles: Ad box, Showreel, Brand rotator, Lock mechanism (default on), Reduced motion, Experimental features

### 3.3 Lock Mechanism
- Freezes current search text on user interaction
- Default on in settings
- Survives page navigation within SPA

## Phase 4: Advertising & Catalog

### 4.1 Ad Box Relocation
- Move from main content to sidebar rail (between status and GitHub link)
- Compact `.pbox` with spinning conic gradient border
- Hover expands to show vertical list of all Lok property options
- Rotates through expanded ADS array (10+ Lok properties)

### 4.2 10+ New UI/UX Components
- Scroll progress, skeleton screen, toast stack, flip card, accordion
- Cursor trail, tabs slide, morph input, progress ring, theme toggle, parallax tilt
- All using existing engine patterns (CSS, GSAP, Motion, Canvas, Anime.js, Matter.js)

## Phase 5: Experimental Category

### 5.1 Studio Remixer (integrated in component detail)
- 3D viewport with Three.js
- Remix any component's parameters visually
- Export as self-contained HTML

### 5.2 Studio Remixer (standalone) — Spline-inspired
- Full 3D studio page in Experimental catalog
- Layers, real-time remixing, export

### 5.3 Color Picker Tool
- Full color wheel + sliders
- Live preview on sample component
- Export color palette as CSS vars

### 5.4 Font Editor Tool
- Web-based font previewer
- Compare fonts side by side
- Test with custom text, size, weight, letter-spacing

## Phase 6: Distribution & Ecosystem

### 6.1 Lok Network Bar
- Thin shared strip across all Lok properties
- Rotating cross-promo links

### 6.2 Permalinks
- URL-encode component id, text, engine, edited CSS/JS
- "Copy link" button in drawer
- Open Graph image per permalink

### 6.3 Customization Shop (future)
- Preset packs (color palettes, font combos, component themes)
- Integration with Lokbook marketplace

## Phase 7: 20+ Future Directions

### Creator Tools
1. Motion Diff — visual before/after slider on edit
2. Scroll Storyboard — chain effects to scroll positions
3. Motion Spec Sheet — export PDF handoff doc
4. Client Presentation Mode — full-screen, no chrome
5. Effect Genealogy — public remix tree

### Intelligence
6. Prompt-to-Motion — AI generates effect from description
7. Search by Vibe — semantic search ("calm", "aggressive", "playful")
8. Video-to-Effect — upload reference clip, get matching component
9. Motion Critic — AI reviews surface against design rules
10. Auto-Brand Match — read site palette, re-theme demos

### Quality & Trust
11. Performance Budget Meter — live FPS and bundle-cost readout
12. Accessibility Auditor — reduced-motion, flash-rate, contrast checks
13. Component Health Monitor — nightly CDN test of all components
14. Cross-browser Matrix — tested compatibility table

### Distribution
15. Lok Motion CLI — `npx lok-motion add glitch`
16. VS Code / Cursor extension — preview components inline
17. Figma plugin — pull Lok effects into prototypes
18. Framer / Webflow export — no-code market
19. Lottie bridge — import/export Lottie
20. Email-safe motion — GIF/APNG for email campaigns

### Platform & Revenue
21. Motion API — headless render service
22. White-label instance — sell as branded internal tool
23. A/B harness — measure which effect converts
24. Motion Bounty Board — community effect requests
25. Font Database API — headless font search
26. Font Bundler — subset & self-host fonts
27. Color System Generator — full palette from one color
28. Component Marketplace — user-submitted components
29. The Archive Rotation — limited-time drops in The Archive
30. Ad Network — sell ad slots to design tool companies

---

## Change Log

| Date | Change | Author |
|---|---|---|
| Jul 2026 | v3.0 modularization — extracted lok-components.js | Agent |
| Jul 2026 | Lok Origin filter implemented (87 self-contained components) | Agent |
| Jul 2026 | The Archive secret feature (iloveyoumerci unlock) | Agent |
| Jul 2026 | Bug fixes: dot animation, card CTA, showreel engine check | Agent |
| Jul 2026 | AGENTS.md created with full developer documentation | Agent |
| Jul 2026 | MASTER-ROADMAP.md created merging all roadmaps | Agent |
| Jul 2026 | Fixes: LokBlock visible, mount bug, refreshText children check, archive button | Agent |
| Jul 2026 | Hero showcase (top-right particle animation canvas) + settings panel | Agent |
| Jul 2026 | Showreel auto-retry + adaptive timing (4.2s for three/matter) | Agent |
| Jul 2026 | Full editor: tabs (Editor/JSON/Install), metadata editing, line numbers, format | Agent |
| Jul 2026 | Component creator: rail button → form modal → test run → save to USER_COMP | Agent |
| Jul 2026 | Bugfix: half-word rendering — refreshText now passes correct eng to engine-based components | Agent |
