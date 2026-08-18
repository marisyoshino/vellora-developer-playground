# QA REPORT — Vellora Developer Playground v3

## Release gate

**Source QA: PASS WITH DOCUMENTED FIGMA GAPS**

### Coverage
- 20/20 current component sets have an implemented route and executable preview.
- 39/39 Vellora icon masters are present as exact exported path definitions.
- Foundations populated: Color, Typography, Spacing & Radius, Elevation.
- Patterns populated: Teleconsultation, Camera & Face Guidance.
- Guidelines populated: Accessibility, Content & Clinical Language, Responsive Layout.
- Governance and Releases populated from Figma source content.
- Getting Started and Components Index included.

### Interaction QA
- Button / Destructive Button: hover, focus, pressed, disabled + click.
- Icon Button: hover, focus, pressed, disabled + toggle example.
- Input / Textarea: real typing, focus, hover, disabled, error.
- Select: real trigger click and `aria-expanded`; option collection intentionally UNKNOWN because not defined in Figma.
- Checkbox: click, focus, disabled, True/False/Indeterminate.
- Radio: click/select, focus, disabled.
- Switch: click/toggle, hover, focused 48×28 focus envelope, disabled track/thumb matching Figma.
- Tabs: Tab Item click/select/focus. Multi-tab content intentionally UNKNOWN.
- Alert: optional action clickable.
- Camera overlay controls: clickable event hooks.
- Call Control: active toggle and danger action; active label gap surfaced.
- Desktop Header: real active-route click and notification action.

### Dimensions checked
- Icon Button 44/52
- Input control 320×44 / 320×52
- Textarea 320×96 / 320×136
- Checkbox/Radio/Switch row 44 high
- Switch track 44×24
- Avatar 32/40/48
- Doctor Card 360×230
- Appointment Card 420×200
- Device Check Row 460×80
- Face Guidance Compact 360×72 / Expanded 480×96
- Camera Guidance Overlay 640×420; face frame 220×290
- Call Control 68×80; target 52×52; icon 24×24
- Desktop Header 1440×80; 120 px horizontal padding / 1200 px content

### Static validation performed in artifact environment
- TypeScript/TSX syntax transpilation: PASS (0 syntax errors).
- Type-level project validation with React module shims: PASS.
- Full `npm install` / Vite build could not be executed in the artifact sandbox because outbound npm network access timed out. Package versions and build configuration are the same build path previously proven on Cloudflare (`npm run build` → `dist`).

- Tabs: indicador do estado Selected passa a usar a largura intrínseca do label como referência, evitando expansão pelo flex container. MATCH com o master atual do Figma.

- Checkbox: MATCH com Figma 30:55. Box 20×20, mark 14 px centralizado matematicamente; removida compensação óptica de -0.25 px. Hover unselected mantém border/default; selected/indeterminate disabled mantêm border/brand.

- Focus token: MATCH. Figma documentation references were normalized to `color/border/focus = #008C95`; obsolete focus-color mismatch removed from Playground.

- Desktop Header / Avatar: MATCH. Figma já possuía Avatar / Patient Medium 40 px, Online, iniciais MA nas quatro variantes, porém oculto. Instâncias foram ativadas; Playground sincronizado com Notification 44 px + Avatar 40 px + gap 12 px.

- Inventory: MATCH. Current source of truth = 20 component families, 229 variants, 39 icons (21 documentary families including Icons). Historical baseline 18/213 retained as changelog history, not treated as mismatch.

- Select: MATCH after materializing `Select / Option` (8 variants) in Figma. Playground now uses the real 44 px option component, 320 px listbox, official Chevron Down/Check icons, click selection, ArrowUp/ArrowDown, Home/End, Enter/Space, Escape, focus return, and example data explicitly separated from product data. Current inventory: 237 variants.

- Radio / Radio Group: MATCH. Figma keeps Radio as the 8-variant visual item and documents composition `314:2` with group label + 2–7 items. Playground implements exclusive selection, roving tab stop, Arrow-key selection and explicit example data without adding a new Figma family.

- Switch: MATCH. Mantidas 8 variantes do Figma (Checked False/True × Default/Hover/Focused/Disabled). Processing/error foram explicitamente definidos como responsabilidade do consumidor. Playground demonstra optimistic update, Disabled durante persistência e rollback em falha sem ampliar a API visual.
