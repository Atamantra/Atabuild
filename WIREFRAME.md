# AtaBuild Homepage: Wireframe & Copy Deck

`index.html` is the built page and holds the final copy. This file covers the structure, the reasons behind each section, and what still needs filling in before launch.

---

## 1. Design system

| Role | Choice | Why |
|---|---|---|
| Brand navy | `#0E1F33` | Used for the hero, header and footer. Sets a solid, corporate tone. |
| Sand gold | `#B08A4A` (light) / `#CFA866` (dark) | Accent for CTAs, eyebrows and topographic lines. Only one accent is used. |
| Crisp white + sand white | `#FFFFFF` / `#F4F2ED` | Sections alternate between the two to give the page rhythm. |
| Display face | Libre Caslon Display | British book-printing heritage. Reads as established, not trendy. |
| Body face | Instrument Sans | Clean and modern, so the copy stays easy to read. |
| Utility face | IBM Plex Mono | Survey and engineering data: parcel numbers, coordinates, programme months. |

**Visual concept: the survey sheet.** The site borrows from the documents a buyer actually gets: topographic surveys, plot dossiers and construction programmes. The hero background is a generated contour map. Beside the headline sits an example **plot dossier** with Ada/Parsel, *emsal* (the zoning build ratio), Tapu status and a 1:500 site plan. Turkish property terms like these are things only a real builder in Türkiye would show, which makes them strong trust signals.

**Photography to add later.** Pair each process stage with a real shot that progresses from raw hillside, surveyor with theodolite, rebar and formwork and blueprints, through the concrete frame against the sea and stone cladding, to the finished villa at dusk with the pool lit. Show the work underway as well as the finished villa. Construction-phase photos prove you really build.

---

## 2. Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│ HEADER (sticky, navy)                                         │
│ AtaBuild  TÜRKİYE·UK   How we build  Why  Where  FAQ  [Book ▸] │
├──────────────────────────────────────────────────────────────┤
│ HERO (navy + generated contour map)                       │
│ ┌───────────────────────────────┐ ┌────────────────────────┐ │
│ │ eyebrow                       │ │ PLOT DOSSIER · example │ │
│ │ H1 (3 lines, gold italic end) │ │ [1:500 site plan SVG]  │ │
│ │ subheadline (UK trust)        │ │ Location / Ada-Parsel  │ │
│ │ [Book free consultation →]    │ │ Area / Emsal / Months  │ │
│ │ [See how a build works]       │ │ ✓ Tapu ✓ Clearance ... │ │
│ │ regions note                  │ │ ○ Building permit      │ │
│ └───────────────────────────────┘ └────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ TRUST BANNER (sand white)                                     │
│ (UK) Backed by Ata Travel Ltd │ Fixed price │ Milestone pay  │
│      Reg. E&W · Co. No.       │ Title first │ Weekly reports │
├──────────────────────────────────────────────────────────────┤
│ PROCESS: construction programme                               │
│ STAGE                         │ M0  3  6  9  12  15+          │
│ 01 PLAN  Consultancy          │ ▬                             │
│ 02 PLAN  Land & topography    │  ▬▬▬                          │
│ 03 SECURE Legal & permits     │   ▬▬▬▬                        │
│ 04 DESIGN Architecture        │   ▬▬▬                         │
│ 05 BUILD Construction         │       ▬▬▬▬▬▬▬▬▬▬              │
│ 06 BUILD Project management   │ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ (gold)  │
│ 07 FINISH Interiors           │               ▬▬▬▬            │
│ 08 FINISH Handover & aftercare│                   ▬▬▬         │
│ each row: copy + "You receive" deliverables                   │
├──────────────────────────────────────────────────────────────┤
│ WHY ATABUILD (sand white)                                     │
│ 3 pillars: UK accountable │ Legal safety │ UK-standard PM     │
│ Comparison table: AtaBuild vs typical local developer         │
├──────────────────────────────────────────────────────────────┤
│ WHERE WE BUILD: 4 region tiles with GPS coordinates           │
├──────────────────────────────────────────────────────────────┤
│ FAQ: 6 accordion questions, 2 columns                         │
├──────────────────────────────────────────────────────────────┤
│ CONTACT / FOOTER (navy)                                       │
│ ┌─────────────────────────┐ ┌──────────────────────────────┐ │
│ │ H2 + lede               │ │ Lead form (white card)       │ │
│ │ UK office │ TR office   │ │ name, email, phone, area,    │ │
│ │ tel / email / hours     │ │ budget, stage, message,      │ │
│ └─────────────────────────┘ │ consent, [Request →]         │ │
│                             └──────────────────────────────┘ │
│ © line · Company No. · Privacy Terms Cookies Complaints        │
└──────────────────────────────────────────────────────────────┘
```

On mobile, every split collapses to one column, the programme scale header is hidden, and the gantt bars sit under each stage.

---

## 3. Copy deck

### Header
- Logo: **AtaBuild** · TÜRKİYE · UK
- Nav: How we build · Why AtaBuild · Where we build · Questions
- CTA: **Book a consultation**

### Hero
- Eyebrow: LAND · DESIGN · CONSTRUCTION · HANDOVER
- **H1:** Your home on the Turkish coast, built to a *British standard.*
- **Sub:** AtaBuild finds the land, secures the permits, designs the villa and builds it, from raw plot to keys in hand. **We are backed by Ata Travel Ltd, our UK-registered parent company**, so your contract, your payments and your point of contact all start in Britain.
- CTA 1 (primary): **Book a free consultation →**
- CTA 2 (secondary): **See how a build works**
- Note: Building in Muğla and Antalya: Bodrum, Fethiye, Kaş, Kalkan and the Lycian coast.

Alternative headlines for A/B testing:
1. From raw land to your own villa on the Turkish coast. Managed from the UK.
2. Build in Türkiye with a British company behind you.
3. The Turkish Riviera, built properly.

### Trust banner
- **Backed by Ata Travel Ltd**: Registered in England & Wales · Co. No. [XXXXXXXX]
- **One fixed-price contract**: Agreed specification and price before ground is broken.
- **Milestone payments**: You pay for stages that are finished and signed off, never in advance of the work.
- **Title checked first**: Tapu, zoning and clearances verified before you commit a penny to land.
- **Weekly site reports**: Photos, video and a written update every week, in English.

### The AtaBuild process
- Eyebrow: THE ATABUILD PROCESS
- **H2:** From a raw plot to a finished home, in eight managed stages.
- Lede: One team carries your project from the first conversation to the years after handover. You always know which stage you are in, what it costs, and what comes next.

| # | Phase | Stage | Timing | You receive |
|---|---|---|---|---|
| 01 | Plan | Property & investment consultancy | Weeks 1–3 | Location shortlist and market report; budget and ROI model in sterling |
| 02 | Plan | Land acquisition & topography | Months 1–3 | Plot due-diligence pack; topographic survey and soil report |
| 03 | Secure | Legal & permit navigation | Months 2–5 | Title deed in your name; approved building permit (yapı ruhsatı) |
| 04 | Design | Bespoke architectural design | Months 2–4 | 3D model and walkthrough; construction drawings and fixed price |
| 05 | Build | Full-scale construction & engineering | Months 5–14 | Stage sign-off before each payment; engineer's inspection records |
| 06 | Build | Dedicated project management | Throughout | Weekly report and video walk-round; monthly budget and programme review |
| 07 | Finish | Interior fit-out & finishing | Months 12–16 | Finishes schedule you approve; landscaped, ready-to-furnish home |
| 08 | Finish | Turnkey handover & management | Month 15+ | Keys, iskan (occupancy permit) and handover file; optional aftercare plan |

The full body copy for each stage is in `index.html`. Footnote: *Timings are indicative for a 200–300 m² villa on a permitted plot. Your programme is fixed in your contract after design sign-off.*

### Why AtaBuild
- **H2:** The Turkish coast, without the usual risks of building abroad.
- Lede: Most stories of overseas builds going wrong come down to three things: unclear title, money paid ahead of the work, and silence from site. Our process is designed around preventing all three.
- Pillars:
  1. **A British company behind every contract.** You deal with a company you can look up, write to and hold to account at home.
  2. **Nothing signed that you can't read.** Title, zoning and clearances checked before any land payment, with every document translated and independent legal review welcome.
  3. **Run like a British project.** A written programme, a fixed specification, stage sign-offs and weekly reporting.
- Comparison table: contract party, price, payments, title and permits, communication, after handover.

### Where we build
Bodrum Peninsula · Fethiye & Göcek · Kalkan & Kaş · Antalya Coast, each with coordinates and a one-line buyer profile.

### FAQ
Can a UK citizen buy land in Türkiye? · Do I need to be in Türkiye during the build? · How are payments protected? · How long does a custom villa take? · What does the first consultation cost? · Can you manage the house after it is built?

### Contact / footer
- **H2:** Book a free consultation with our UK team.
- Lede: Tell us what you have in mind. A consultant will reply within one working day to arrange a video call at a time that suits you.
- Form fields: Full name · Email · Phone (optional) · Area of interest · Total budget (£ bands) · Where are you now? · What would you like to build? · Consent
- Button: **Request my consultation →**
- Legal line: © 2026 AtaBuild, a trading name of Ata Travel Ltd. Registered in England & Wales, Company No. [XXXXXXXX].

---

## 4. Before launch: check these

Placeholders to replace:
- Ata Travel Ltd company number (shown in 2 places), UK registered office address, Türkiye office address
- Phone numbers, and whether `hello@atabuild.co` is live
- `FORM_ENDPOINT` in the script at the bottom of `index.html`: connect it to your CRM or form service. Until then the form validates but sends nothing.
- Privacy, Terms, Cookies and Complaints pages

Claims to confirm before they go live. Each one is a promise to clients, so only publish it if it is true in your contracts:
- **"AtaBuild, a trading name of Ata Travel Ltd"**: or describe it as a subsidiary if AtaBuild is a separate Turkish entity. Ask a solicitor which wording is accurate.
- **"Your agreement with us is made through our UK framework"**: say exactly what this means. For example, is the contract governed by English law, and are client funds held in a UK account?
- **Fixed price, milestone payments, weekly reports, reply within one working day, free consultation**: keep these only if you will honour every one.
- **Timelines (14–18 months) and seismic-code wording**: have your site engineer confirm them.
- The plot dossier in the hero is labelled *example*. Keep that label, or replace it with a real past project with the client's permission.
- Avoid words like "guaranteed returns" or "risk-free" in ads and on the site. UK advertising rules (CAP Code) treat unqualified claims like these strictly when they are about overseas property investment.
