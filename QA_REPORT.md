# QA REPORT — Vellora Developer Playground 2.0.0

## Release gate

**STATIC / CONTRACT QA: PASS**  
**Cloudflare production build: pending upload of this release.**

The previous flat-repository build path was already proven on Cloudflare. In this artifact environment, `npm install` timed out because outbound package access was unavailable, so a local Vite bundle was not falsely marked as executed.

## Figma ↔ Code ↔ Playground parity

- 20/20 main component families have executable Playground routes.
- 20/20 component specs are marked `MATCH` after the final contract audit.
- 227 variants remain in the 20 main families.
- `Select / Option` contributes 8 subordinate variants.
- Total current documented variant nodes: **235**.
- 39/39 Vellora icon masters remain in the repository.
- Historical baseline 18 families / 213 variants remains preserved.
- Current Figma release note and Components Index were updated to 2.0.0 / 235 documented variant nodes.

## Final contract corrections

- **Button / Destructive Button:** no parallel `disabled` or `loading` public prop; disabled derives from State. Async progress belongs to consumer composition.
- **Icon Button:** Figma default Style=Primary synchronized; Accessible label default is `Abrir opções`; Pressed remains transient interaction state, not toggle state; style-specific pressed tokens corrected.
- **Input / Textarea:** unique IDs per instance; hidden visual label remains accessible; no fabricated `maxLength`; “500 caracteres” remains example copy.
- **Select:** real Select / Option component, real open-list demo, official Chevron Down / Check icons, keyboard navigation and focus return; product option collections remain consumer-defined.
- **Checkbox:** 20×20 control and centered mark match master; Indeterminate remains explicit.
- **Radio / Radio Group:** exclusive selection, roving tab stop and arrow-key navigation; example labels are not product data.
- **Switch:** Processing/error remain consumer behavior; no invented loading/error variant; rollback demo is isolated from visual API.
- **Badge:** 12 Size × Tone variants covered; Brand/Success values match Figma variables.
- **Avatar:** 9 Size × Status variants covered; Large 14 px status dot position corrected to the master; initials remain readable with status exposed separately.
- **Tabs:** Tab Item keeps its 8 variants and intrinsic-width underline; Tabs/List composition was materialized in Figma and implemented with tablist/tabpanel, roving focus, ArrowLeft/ArrowRight and Home/End.
- **Alert:** all 8 Tone × Action variants covered; no invented dismiss prop; default live-region behavior is non-interruptive and Tone=Danger alone does not imply `role=alert`.
- **Doctor Card:** no invented action/loading API; Featured remains editorial only; long professional registration can wrap instead of truncating.
- **Appointment Card:** invalid `Completed + Action=True` and `Cancelled + Action=True` variants were removed from Figma after confirming zero instances. Code exposes only the six valid combinations and rejects the invalid pair in TypeScript.
- **Device Check Row:** retry/timeout remain integration responsibilities; row stays informative.
- **Face Guidance Status:** status-specific Figma copy synchronized; component receives validated state and does not calculate thresholds.
- **Camera Guidance Overlay:** all 8 Status × Controls variants covered; Controls=True is exactly Câmera / Microfone / Sair; retry/threshold logic remains external.
- **Call Control:** no invented `activeLabel` / `activeIcon`; Active uses the existing Label/Icon properties and runtime focus can coexist with the visual active treatment.
- **Desktop Header:** Avatar restored, 12 px actions gap, 1440×80 master, official Bell icon, and visibility boundary corrected to `<768 px`. Bottom navigation remains an existing product pattern, not a published DS family.

## Interactive QA coverage

- Buttons: click, real hover/focus/active plus forced reference states.
- Form controls: typing, selection, validation references, disabled states.
- Select: open/close, ArrowUp/Down, Home/End, Enter/Space, Escape, focus return.
- Radio Group: exclusive selection + arrow navigation.
- Switch: optimistic consumer demo + processing lock + rollback.
- Tabs/List: selection + focus + ArrowLeft/Right + Home/End + associated panel.
- Alert action, Appointment action, Camera controls, Call Control and Desktop Header routes are executable.
- Responsive Lab tests 320, 375, 599, 600, 767, 768, 1024 and 1440 px boundaries.
- Edge Case Lab tests narrow widths and long-copy overflow without turning sample content into product rules.

## Static validation executed

- TypeScript/TSX parse/transpile: **PASS — 9 files, 0 syntax errors**.
- Type-level check with local React compatibility shims: **PASS**.
- Local relative import graph: **PASS**.
- CSS custom properties used by component styles: **PASS — 0 undefined token references**.
- Repository gate: **PASS** — `/main.tsx`, `public/_headers`, package 2.0.0, `vite build`, no build/cache artifacts committed.
- Full dependency install / Vite bundle: **not executed locally** because outbound npm access timed out. This is documented rather than inferred.

## Intentionally unresolved product/integration definitions

See `FIGMA_GAPS.md`. Remaining unknowns are limited to governance metadata, field max lengths, Checkbox group aggregation, Switch persistence integration, Appointment action window, device timeout, face/camera thresholds and promotion of Bottom navigation into a published DS family.
