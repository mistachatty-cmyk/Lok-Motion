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

... (full roadmap content included in project)
