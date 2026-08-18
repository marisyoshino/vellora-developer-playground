# FIGMA GAPS — fields that still need product/design definition

These are intentionally not invented in the playground.

1. **Per-component Status / Owner / component-specific version** — not defined in the inspected Figma component metadata. The page shows `UNKNOWN — NEEDS DEFINITION`.
2. **Select option data** — `Select / Option` and the open-list composition now exist in Figma. Business option collections remain consumer-defined; no specialty list is encoded in the component contract.
3. **Input max lengths** — defined per product field, not in the component family.
4. **Textarea max length** — “500 caracteres” is explicitly an example; real limit is field-specific.
5. **Checkbox Indeterminate group rule** — docs say next action follows the documented group rule, but no group rule is supplied.
7. **Switch persistence contract** — failure must revert state, but API/backend persistence mechanism is not defined.
8. **Tabs/List composition content** — Tab Item exists; additional tab labels and panel content are not specified.
9. **Appointment action availability window** — action depends on a product-defined time window; the value is absent.
10. **Device Check timeout thresholds** — Checking cannot be indefinite, but timeout values are absent.
11. **Face Guidance thresholds** — stability/tracking thresholds belong to validated implementation and are absent.
12. **Camera Guidance processing thresholds / real retry integration** — not defined.
13. **Call Control Active copy** — Figma requires icon + label to change, but does not define separate `activeLabel` / `activeIcon` properties or the active label text. The playground leaves `activeLabel` empty until defined.
14. **Desktop mobile replacement component** — docs require replacing Desktop Header below 768 px, but a corresponding published component is not defined on this component page.
