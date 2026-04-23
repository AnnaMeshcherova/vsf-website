# Design System — The Venture Scientist Fund

## Product Context
- **What this is:** A single-page bilingual (EN/FR) marketing site for The Venture Scientist Fund (VSF), a Canadian AI venture fund backing AI researchers at the moment of discovery. Fund I raising.
- **Who it's for:** Institutional LPs evaluating a first-check AI fund; AI researchers considering founding; Mila and Inovia networks.
- **Space/industry:** Venture capital / deep tech / AI research.
- **Project type:** Marketing site, single page, bilingual.

## Aesthetic Direction
- **Direction:** Editorial-institutional with quiet scientific texture.
- **Decoration level:** Minimal. Typography and whitespace do the work. No decorative patterns, no gradient overlays, no bubbly UI.
- **Mood:** Confident and quiet. Like a serious research-press publication (MIT Press, NYRB) that happens to be a venture fund. LPs should feel "these people are serious." Researchers should feel "these people understand us."
- **Reference sites:** nea.com (primary), sequoiacap.com, editorial-press sites (MIT Press, NYRB) for typographic tone.

## Typography

**Three fonts only. Institutional-serious — the kind of type governments, LPs, and pension funds trust without thinking about.**

- **Display / Hero / Section headings:** **Source Serif 4** (Adobe / Google Fonts, free).
  Adobe's institutional workhorse serif. Understated, no decorative flourishes. Reads like State Department white papers. Variable font with `opsz` 8–60, `wght` 200–900, italic. Extended Latin for French accents.
- **Body + UI:** **IBM Plex Sans** (IBM / Google Fonts, free).
  IBM's corporate typeface. Used by governments, Fortune 500, and serious institutions. Not "playful." Weights: 400, 500, 600. Full bilingual support.
- **Data / section numbers / eyebrows:** **IBM Plex Sans** (same as body — uniform institutional voice).
  Used in uppercase with letter-spacing 0.14–0.18em at 11–12px, weight 500. Replaces the earlier JetBrains Mono which read too "tech/code" for a serious venture fund.

**Loading:** single `<link>` to Google Fonts, `display=swap`. Two families total: Source Serif 4 + IBM Plex Sans.

**Why not Fraunces + Geist:** Fraunces is editorial-playful — wedge serifs and optical extremes feel literary magazine, not institutional LP. Geist is tech-modern — fine for startup SaaS, wrong for a serious venture fund. Source Serif 4 + IBM Plex Sans is the "boring but trusted" pair.

**Font scale:**
| Token | px (desktop) | Use |
|-------|-----|-----|
| display-xl | clamp(52, 8vw, 112) | Hero headline |
| display-lg | clamp(44, 5.6vw, 88) | Section H2 |
| display-md | clamp(40, 4vw, 64) | Contact H2 |
| h-lg | 32 | Card headings |
| body-lg | 19 | Hero sub, prose intro |
| body | 17 | Default body |
| small | 14 | Footer, meta |
| mono-label | 11 | Eyebrow, section number |

**Line heights:** display 0.95–1.05; body 1.55.
**Letter-spacing:** display −0.02em; body 0; mono +0.14em uppercase.

## Color

**Approach:** restrained. One accent, used rarely and with intent.

| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#F4F1EA` | Page background (warm ivory) |
| `--bg-alt` | `#FFFFFF` | Alt section background (Opportunity, Team) |
| `--ink` | `#17150F` | Primary text, display type |
| `--ink-soft` | `#2B2924` | Body prose |
| `--ink-mute` | `#6B6861` | Meta, captions, labels |
| `--rule` | `#E4DFD2` | Hairlines, section separators |
| `--rule-strong` | `#B8B1A0` | Emphasis rule |
| `--accent` | `#1C3D5C` | Prussian ink-blue. Link hover underline, one-stat emphasis |
| `--ivory` | `#F4F1EA` | Text over hero (same as `--bg`) |
| `--ivory-mute` | `rgba(244,241,234,0.78)` | Sub text over hero |

**Dark mode:** out of scope for v1.

## Spacing

- **Base unit:** 4px
- **Scale:** `2xs(2) xs(4) sm(8) md(12) lg(16) xl(24) 2xl(32) 3xl(48) 4xl(64) 5xl(96) 6xl(128)`
- **Density:** Spacious. Section vertical padding 120–180px desktop, 80–96px mobile.

## Layout

- **Approach:** Grid-disciplined body; creative-editorial hero (left-weighted asymmetric).
- **Grid:** 12 columns ≥1024px, 8 at 768–1023, 4 at <768.
- **Max content width:** 1360px. Primary text column: ~720px max reading width.
- **Border radius:** `--radius-btn: 999px` (pill, for all CTAs/buttons), `--radius-card: 6px` (softer card corners), `50%` for circular team portraits.
- **Rule lines:** 1px solid `--rule` between sections.

## Density (compact)

- **Section vertical padding:** 72px desktop, 56px mobile. Compact rhythm — sections read fast, most fit within a laptop viewport.
- **Section-head margin-bottom:** 32px.
- **Inter-block spacing inside sections:** 28–40px (was 48–80).

## Motion

- **Approach:** Minimal-functional. Type appears with confidence; it does not perform.
- **Easing:** `enter: cubic-bezier(0.2, 0.8, 0.2, 1)` (ease-out). `exit: ease-in`.
- **Duration:** micro 80ms · short 200ms · medium 320ms · long 480ms.
- **Scroll reveal:** opacity 0→1 + translateY 12px→0, 320ms ease-out, stagger 80ms.
- **Removed:** CountUp on stats, typewriter line, ticker marquee, tweaks panel.

## Hero

- **Image:** `assets/hero-bg.jpg` — NASA/GSFC Hubble "Bubble Nebula" (public domain). Warm amber + cyan cosmic imagery. Left side is the quiet zone for text.
- **Treatment:** full-bleed `<img>` background, linear-gradient scrim (12,10,6 / 0.72 → 0.1 left-to-right; 0.35 top fade; 0.45 bottom fade). Ivory text overlay.
- **Composition:** asymmetric left-weighted. Headline in serif display, generous leading. Sub-copy body-lg. One primary button (solid ivory on dark) + one ghost button.
- **Nav over hero:** transparent, ivory text, white VSF logo. After scroll past hero, transitions to ivory-bg, dark text, black logo.

## Section Restructure

- **CredStrip → folded into Hero** as a small "In partnership with Mila + Inovia Capital" line under the sub-copy.
- **Team:** list layout only. Drop grid and ticker variants.
- **Tweaks UI:** removed entirely. One committed design, no runtime toggles.
- **Thesis typewriter line:** removed (gimmick).
- **CountUp animations:** removed (gimmick).
- **Opportunity bar animation:** removed (keep the visual bars, static).
- **Advantage cards:** simplified — hairline-edged blocks instead of gradient-heavy.

Section order unchanged: Hero → Thesis → Opportunity → Advantage → Team → Contact → Footer.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-23 | Initial design system created by `/design-consultation` | Reduce 7 fonts → 3; ivory bg + Prussian accent; NASA Hubble nebula hero; remove tweaks panel. Commit to an NEA-caliber editorial point of view tuned for Canadian AI + research-fund positioning. |
| 2026-04-23 | Font swap: Fraunces + Geist → Source Serif 4 + IBM Plex Sans | User feedback: "too playful." Needs institutional-serious register for government/LP audience. Source Serif 4 + IBM Plex Sans is the institutional-grade pair (Adobe + IBM institutional typography). |
| 2026-04-23 | Pill buttons + softer cards | User feedback: "want all CTA and buttons more rounded, softer." Switched button radius from 2px to 999px (pill), cards from 0 to 6px, team portraits from square to circular. Institutional-modern register (think banks, fintech, not brutalist). |
| 2026-04-23 | Compact density | User feedback: "each section doesn't fit within window view." Cut section-y from 140px → 72px, tightened all inter-block spacing, reduced opportunity stat size, team rows 32px → 20px padding. Most sections now fit in a 900px laptop viewport. |
| 2026-04-23 | Dropped JetBrains Mono entirely | User: "replace all JetBrains Mono with IBM Plex Sans — I don't want to see it anywhere." Mono read too "tech/code" for institutional-serious register. Now exactly 2 fonts across the entire site: Source Serif 4 (display) + IBM Plex Sans (body, labels, eyebrows, stats). |
