# LOK MOTION — ROADMAP
### Planning document · v1 · July 2026
**Owner:** Eric — Lok Services
**Status:** planning only. Nothing here is built. Approve before implementation.

---

## 0. Where we are

Live: 130 demos, 7 engines, 11 libraries indexed, 162 components catalogued.
Single file, no build step, viewport-gated rendering, favorites, image upload.

The site works. Everything below is about turning a working tool into a **business asset** —
something that installs into other people's workflows and markets itself while doing it.

---

## 1. Decision log

| # | Idea | Call | Notes |
|---|---|---|---|
| 6 | **@lok Registry** | 🔴 **Priority 1** | The moat. Everything else is a feature; this is a product. |
| 7 | **MCP Server** | 🔴 **Priority 1** | Registry's distribution arm. Ships right behind it. |
| 9 | **Recorder + Social Export** | 🟠 **Priority 2** | Streamlined. Full platform resolution matrix + AdSense sizes. |
| 10 | **Weekly Effect Drop** | 🟠 **Priority 2** | Confirmed permanent. Needs 4+ week backlog before launch. |
| 4 | **Permalinks** | 🟡 Greenlit | Moves earlier than expected — see §2. |
| 3 | **Timing Panel** | 🟡 Greenlit | |
| 5 | **React/JSX Toggle** | 🟡 Greenlit | |
| 2 | **Combo Lab** | 🟡 Greenlit, scoped down | Explore implementation. Don't overload. See §3.8. |
| 8 | **Brand Kits** | ⏸️ **Paused** | Unpause trigger identified — see §5. |
| 1 | **Lok Draw** | 📦 **Archived** | Full concept preserved in §5. |

---

## 2. Sequencing — and one thing that changed

**Permalinks has to move up.** It was originally #4 on a flat list, but it's a hard dependency
for two of the priorities:

- **The Recorder** needs a way to say *"record this exact effect, with this word, at these timings."*
  Without permalinks it can only record whatever is currently on screen.
- **The Weekly Drop** needs a link per drop. Every post points at one configured effect.
  Without permalinks, every drop points at the homepage and dies there.

So permalinks moves into Phase 1 as infrastructure, not as a feature.

**Revised order:**

```
PHASE 1 — FOUNDATION          @lok Registry · MCP Server · Permalinks
PHASE 2 — CREATOR LOOP        Timing Panel · React/JSX Toggle
PHASE 3 — DISTRIBUTION        Recorder + Social Export · Weekly Drop pipeline
PHASE 4 — DEPTH               Combo Lab
```

Phase 3 is where the marketing flywheel actually starts turning. Phases 1–2 exist to make
Phase 3 possible. Combo Lab is last on purpose — it's the highest-effort, lowest-urgency item,
and it gets much easier once the timing panel and permalink state model already exist.

---

## 3. Specs

### 3.1 @lok Registry — Priority 1

**What it is.** A shadcn-spec component registry at `registry.lok.services`, so that:
```bash
npx shadcn@latest add @lok/glitch
```
resolves and drops a Lok component into anyone's project.

**Why it's first.** A gallery is something people visit. A registry is something people
*install*. It changes the relationship from "I saw that site once" to "that's in my project."
It's also the only item on this list that a competitor can't trivially copy — it requires the
130 original components we already own.

**Scope for v1**
- `registry.json` manifest, shadcn schema
- Serve `/r/{name}.json` per component
- Start with 20–30 components, not all 130. Curate the strongest.
- Every entry carries its `PROVENANCE.md` line
- Deploy on Vercel, same account as the main site

**Open decisions**
- One namespace or split `@lok` (free) / `@lok-pro` (paid)?
- Do registry components ship as vanilla, JSX, or both? (Ties to §3.5.)
- Versioning strategy — do we pin, or always serve latest?

**Effort:** medium. The components exist; this is packaging and hosting.
**Risk:** low. Static JSON on Vercel.

---

### 3.2 MCP Server — Priority 1

**What it is.** An MCP server exposing the `@lok` registry so any agent — Claude Code, Cursor,
Antigravity, Codex, Gemini — can search and install Lok components by natural language.

> "Add a glitch text effect and convert it to my brand colors."

**Why it matters.** Developers increasingly don't browse for components; their agent finds them.
Being installable by an agent is the 2026 equivalent of being on the first page of Google.
Right now almost nobody has done this for a motion library specifically.

**Scope for v1**
- `search_components(query)` — semantic over name/tags/category
- `get_component(id)` — returns code + install command + license + attribution
- `list_engines()` — what's available and what each is good at
- Ships with a short `llms.txt` so non-MCP agents can read the catalog too

**Dependency:** Registry must exist first. MCP is a wrapper over it.

**This is the SaaS candidate.** Free tier: search + install originals. Paid tier: private
registries, team namespaces, usage analytics. But — build it free first, prove people use it.

**Effort:** medium. **Risk:** medium — MCP spec is still moving; budget for revisions.

---

### 3.3 Permalinks — Phase 1 (promoted)

**What it is.** Every effect + configuration encodes to a URL.

```
lok.services/motion?c=glitch&t=PARTY%20BITES&d=2400&e=outElastic
```

Opening it loads that exact effect, with that word, at those timings.

**Why it moved up.** Recorder and Weekly Drop both depend on it (see §2). It's also the
cheapest sharing mechanism that exists — no account, no export, just a link.

**Scope**
- URL-encode: component id, text, engine, edited CSS/JS (compressed), timing params
- "Copy link" button in the drawer
- Long edits → LZ-compress before encoding; if still too long, fall back to "copy code instead"
- Open Graph image per permalink (see §6.4 — this doubles as a marketing surface)

**Effort:** low-medium. **Risk:** low.

---

### 3.4 Timing Panel — Phase 2

**What it is.** Sliders for duration, delay, stagger, easing, loop — no code editing.

**Why it matters.** Right now editing means writing JavaScript. That gates the site to
developers. Sliders open it to designers, marketers, and clients — a much larger audience,
and the audience most likely to *share* what they make.

**Scope**
- Detect tunable params per component (declare them in a `params:` field on each component)
- Render appropriate control per type: slider, easing dropdown, toggle
- Live re-mount on change, debounced
- Values flow into the permalink

**Note:** requires adding a `params` schema to the component database. Do this once, carefully —
Combo Lab and the Recorder both read from it later.

**Effort:** medium. **Risk:** low.

---

### 3.5 React / JSX Toggle — Phase 2

**What it is.** A switch in the drawer: **Vanilla / React**. Same component, emitted as a
proper `.jsx` with imports, hooks, and cleanup in `useEffect`.

**Why it matters.** The entire shadcn ecosystem — the audience most likely to install from
`@lok` — is React. Shipping vanilla-only halves the addressable market.

**Scope**
- Wrapper template per engine (Motion, GSAP, Anime, Three, Matter all have known React patterns)
- `useEffect` with the existing `onStop` teardown mapped to the cleanup return — our teardown
  contract already maps 1:1 to React cleanup, which is lucky
- TypeScript variant as a stretch

**Effort:** medium. **Risk:** low-medium — needs real testing in a React app, not just visual check.

---

### 3.6 Recorder + Social Export — Priority 2

**What it is.** Record any effect to video, at the exact resolution the destination platform wants.

**Why it's a priority.** This is the marketing engine. Every video someone exports and posts
carries a Lok watermark and drives traffic back. It turns users into a distribution channel.

#### The honest technical problem

Not all 130 demos can be recorded the same way.

- **Canvas / WebGL / Three.js / Matter.js** (38 components) — `canvas.captureStream()` works
  natively. Pixel-perfect at any resolution. **These are also the most visually impressive ones.**
- **CSS / DOM** (92 components) — cannot be captured directly. Options are DOM→canvas rasterization
  per frame (slow, font issues) or `getDisplayMedia` screen capture (works but prompts and captures
  browser chrome).

**Recommended phasing:**

| Phase | Coverage | Method |
|---|---|---|
| **A** | 38 canvas/GL/3D/physics demos | `captureStream()` → WebCodecs → MP4. Ship this first. |
| **B** | Top ~20 CSS demos | Author an optional `drawFrame(ctx, t, w, h)` canvas variant per component. Real work, pixel-perfect result. |
| **C** | Everything else | `getDisplayMedia` fallback, clearly labeled as lower quality. |

Phase A alone is a shippable, genuinely impressive feature. Don't block on B.

**Encoding:** WebCodecs `VideoEncoder` + `mp4-muxer` for H.264/MP4. MediaRecorder only gives
WebM, which TikTok and Instagram handle inconsistently. Avoid `ffmpeg.wasm` — 25MB is too heavy
for a site whose whole pitch is that it loads instantly.

#### Social presets

| Platform | Format | Resolution | Ratio |
|---|---|---|---|
| TikTok | Video | 1080 × 1920 | 9:16 |
| Instagram Reels | Video | 1080 × 1920 | 9:16 |
| Instagram Feed | Video/Image | 1080 × 1350 | 4:5 |
| Instagram Square | Video/Image | 1080 × 1080 | 1:1 |
| Instagram Story | Video | 1080 × 1920 | 9:16 |
| YouTube Shorts | Video | 1080 × 1920 | 9:16 |
| YouTube | Video | 1920 × 1080 | 16:9 |
| Facebook Feed | Video/Image | 1080 × 1080 | 1:1 |
| Facebook Story | Video | 1080 × 1920 | 9:16 |
| X / Twitter | Video | 1600 × 900 | 16:9 |
| LinkedIn | Video/Image | 1200 × 627 | 1.91:1 |
| Pinterest | Video/Image | 1000 × 1500 | 2:3 |
| Snapchat | Video | 1080 × 1920 | 9:16 |

#### Display-ad sizes (IAB standard — the AdSense set)

| Size | Name | Notes |
|---|---|---|
| 300 × 250 | Medium Rectangle | Highest-inventory unit on the web |
| 336 × 280 | Large Rectangle | |
| 728 × 90 | Leaderboard | Desktop header standard |
| 300 × 600 | Half Page | High-impact, strong CPM |
| 320 × 100 | Large Mobile Banner | |
| 320 × 50 | Mobile Banner | |
| 970 × 250 | Billboard | Premium desktop |
| 970 × 90 | Large Leaderboard | |
| 160 × 600 | Wide Skyscraper | |
| 468 × 60 | Banner | Legacy but still served |
| 250 × 250 | Square | |
| 200 × 200 | Small Square | |

**Ad-specific requirements to handle:**
- Animated display ads are typically capped at **30 seconds** and must **stop after 3 loops**
- File size ceilings are strict — 150KB is the common limit. Offer **animated GIF and APNG**
  export alongside video for these sizes.
- Google's HTML5 ad format is also worth supporting later — that's where our components would
  genuinely shine, since they're already self-contained HTML+CSS+JS.

**Watermark policy**
- Free tier: small `lok.services` mark, bottom corner, on every export
- Paid tier: watermark off
- This is the growth loop. Don't make it removable for free.

**Effort:** high — this is the biggest single build on the list.
**Risk:** medium-high. WebCodecs browser support and mobile Safari behavior need real testing.

---

### 3.7 Weekly Effect Drop — Priority 2

**Confirmed permanent.** One new component per week, forever.

**Why it works.** It gives people a reason to return, it compounds the catalog automatically,
and each drop is a free content unit for every social channel.

#### Backlog is the whole game

Your instinct is right: **never launch a weekly series without a month of runway.**
The failure mode for every weekly series is missing week 6.

- **Minimum before launch:** 4 drops complete and scheduled
- **Healthy steady state:** 6–8 drops ahead
- **Red line:** if the buffer drops below 3, pause the calendar and batch-build

**Building the backlog fast.** Don't build one per week — batch. A focused session can produce
6–10 components, because the hard infrastructure already exists; each new one is CSS + a `js`
string against a proven contract. Two batch sessions gets you ~3 months ahead.

#### Themed months (draft — 12 months of structure)

| Month | Theme |
|---|---|
| 1 | Kinetic type |
| 2 | Scroll & parallax |
| 3 | Physics |
| 4 | Shaders |
| 5 | Loaders & micro-interaction |
| 6 | 3D |
| 7 | Retro / CRT / Y2K |
| 8 | Data-viz motion |
| 9 | Cursor & pointer |
| 10 | Reveal & transition |
| 11 | Ambient / background |
| 12 | Best-of + community picks |

Themes make batching easier (build 4 similar things in one session) and give each month a
marketing hook.

#### Per-drop content package

Each drop ships as one bundle:
1. The component, live on the site, with a permalink
2. A 9:16 vertical video (auto-generated by the Recorder)
3. A 1:1 square version
4. Caption + install command
5. Ad-size GIF, if it fits

**Automation target:** the site generates the whole package from the permalink. Manual effort
per drop should trend toward writing one caption.

**Effort:** low to start (manual), medium to automate.
**Risk:** low — but only if the backlog discipline holds.

---

### 3.8 Combo Lab — Phase 4, scoped down

**What it is.** Stack two effects into one surface — Aurora background + Blur In text — and
export the merged component.

**Why it's genuinely differentiated.** Nobody lets you compose *across engines*. A Three.js
background with GSAP text on top, exported as one file, doesn't exist as a product anywhere.

**Why it's last.** It's the highest-complexity item and it gets significantly cheaper after the
Timing Panel establishes a params schema and Permalinks establishes a state-encoding model.

**Scope control — your "don't overload" instinct is the right one.** Hard limits for v1:

- **Exactly 2 layers.** Background + foreground. Not N layers.
- **Curated compatibility.** Not every pair works. Tag components as `layer: bg` or `layer: fg`
  and only offer valid combinations. Better to offer 40 good pairs than 4,000 mostly-broken ones.
- **No cross-engine communication.** The layers coexist visually; they don't talk to each other.
  That's 90% of the value at 10% of the complexity.

**Effort:** high. **Risk:** medium — mainly CSS scoping collisions between two mounted components.
Our existing per-instance scoping should hold, but it needs testing.

---

## 4. What I'd build first

If you want one thing moving this week: **the `@lok` registry, seeded with 20 components.**

It's the shortest path from "site" to "infrastructure," it unblocks the MCP server, and it's
mostly packaging work on components that already exist and are already tested.

Second: **permalinks**, because two later priorities are blocked on it and it's cheap.

---

## 5. Archive — preserved, not deleted

### 📦 Lok Draw
Pull Lokbook's drawing engine into Lok Motion. Sketch a path; it exports as an SVG
`stroke-dashoffset` reveal, a Matter.js body outline, or a GSAP MotionPath. **Your drawing
becomes the animation.**

*Why it's worth keeping:* it's the single most original idea on the whole list, and it's the one
that connects Lok Motion structurally to Lokbook rather than just by branding.

*Revisit when:* Combo Lab ships. Both are canvas-composition problems and will share machinery.

### ⏸️ Brand Kits
Save a palette + font + word once; every demo on the site adopts it.

**Unpause trigger — worth flagging now:** Brand Kits is a hard dependency for **Partner Preset
Packs** (§6.5). The moment you want a partner's brand as a shareable preset on the site, Brand
Kits has to exist. So it's paused as a *user feature* but stays live as a *marketing dependency*.
Don't let it get forgotten.

---

## 6. Marketing flywheel — pulling to the rest of the business

You asked for five. Here are seven, ordered by leverage.

### 6.1 Attribution watermark on every export
Every free video, GIF, and ad unit carries a small `lok.services` mark. Every share is a backlink
and an impression. This is the cheapest, highest-leverage growth mechanic available and it costs
nothing to build once the Recorder exists.

### 6.2 Lok Network Bar
A thin, shared strip across **every** Lok property — Lok Motion, Runesite, Lokbook, LocalPerks,
TRYL, GSix. Rotating cross-promo. Every property feeds every other property. Build once, deploy
to all. This is the single highest-ROI thing on this list for the ecosystem as a whole.

### 6.3 "Built with Lok Motion" showcase
Clients and partners submit sites using Lok components. They get a backlink and a badge; you get
social proof and a sales page that writes itself. Costs one page and a submission form.

### 6.4 Permalink OG images
Every permalink auto-generates an Open Graph preview image showing the effect with the user's own
word. Pasting a Lok link into Slack, iMessage, or X produces a branded card. Free marketing on
every single share, forever. **This is why permalinks pair with the Recorder.**

### 6.5 Partner Preset Packs
A partner's brand kit becomes a public preset on the site. "View the TRYL pack." "View the
[client] pack." Partners get a live showcase; you get their audience visiting your site. Depends
on Brand Kits — see §5.

### 6.6 Sponsored Effect Drop
A business sponsors a weekly drop and their brand name is the demo word. Small, clean, native ad
unit that doesn't feel like an ad — because the whole site is *already* about typing a brand name
into effects. The format was made for this.

### 6.7 Embeddable "type your brand" widget
Ship the word-bar as a small embeddable widget any partner can drop on their site. Their visitors
type their own brand, see it animate, and click through to Lok Motion. It's a lead magnet that
lives on other people's domains.

---

## 7. Twenty-four more directions

Not prioritized. A menu to pick from, grouped by what they'd do for the business.

### Creator tools
1. **Motion Diff** — visual before/after slider when you edit a component
2. **Scroll Storyboard** — chain effects to scroll positions, export a whole scroll experience
3. **Motion Spec Sheet** — export a printable PDF handoff doc (timings, easings, tokens) for devs
4. **Client Presentation Mode** — full-screen, no chrome, for pitching work to a client
5. **Effect Genealogy** — public remix tree showing how components fork and evolve

### Intelligence
6. **Prompt-to-Motion** — describe an effect in words, AI generates it into the lab
7. **Search by Vibe** — semantic search for "aggressive," "calm," "expensive," "playful"
8. **Video-to-Effect** — upload a reference clip, get the closest matching component
9. **Motion Critic** — AI reviews your surface and flags the AI-tells from our own design rules
10. **Auto-Brand Match** — paste any URL, it reads the site's palette and re-themes every demo

### Quality & trust
11. **Performance Budget Meter** — live FPS and bundle-cost readout per component
12. **Accessibility Auditor** — reduced-motion compliance, flash-rate seizure risk, contrast
13. **Component Health Monitor** — nightly automated test of all 130 against live CDNs, flags breakage
14. **Cross-browser Matrix** — which components work where, tested not guessed

### Distribution
15. **Lok Motion CLI** — `npx lok-motion add glitch`, independent of shadcn
16. **VS Code / Cursor extension** — preview and insert Lok components inline while coding
17. **Figma plugin** — pull Lok effects into Figma prototypes
18. **Framer / Webflow export** — the no-code market is large and underserved for real motion
19. **Lottie bridge** — import/export Lottie, connecting to the whole After Effects ecosystem
20. **Email-safe motion** — GIF/APNG fallbacks for email campaigns. Genuinely underserved niche.

### Platform & revenue
21. **Motion API** — headless render service. POST params, get back a video or GIF. Sells to
    agencies and automation tools.
22. **White-label instance** — sell the entire site as a branded internal design-system tool
23. **A/B harness** — ship two effects, measure which converts. Turns motion into a business metric.
24. **Motion Bounty Board** — people post effect requests with a price; you or the community build them

---

## 8. Risks worth naming now

| Risk | Impact | Mitigation |
|---|---|---|
| Weekly Drop backlog runs dry | Series dies publicly | Hard rule: 4 minimum, pause calendar below 3 |
| WebCodecs support gaps on mobile Safari | Recorder unusable for half of mobile | Test early. MediaRecorder/WebM fallback. |
| CSS demos can't be recorded | Only 38 of 130 exportable at launch | Phase A ships anyway — those are the best-looking ones |
| MCP spec changes | Rework | Keep the server thin; registry is the durable layer |
| GSAP license still unverified | Can't use in paid client work | **Resolve before any paid deliverable.** Still open from v1. |
| Scope creep across 8 workstreams | Nothing ships | Phases are sequential. Finish Phase 1 before opening Phase 2. |

---

## 9. Open questions for you

1. `@lok` — one namespace or free/pro split?
2. Registry components — vanilla, React, or both at launch?
3. Paid tier — is that watermark removal, private registries, or both?
4. Weekly Drop — which channels first? (TikTok + IG Reels is the obvious pair)
5. Do you want the Lok Network Bar (§6.2) scoped as its own project? It affects six properties,
   not just this one, and it may deserve to jump the queue.

---

*Nothing in this document is built. Approve, reorder, or cut before implementation begins.*
