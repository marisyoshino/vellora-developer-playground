# Vellora Developer Playground v3

React + TypeScript + Vite. Source-of-truth visual/contract data was extracted from the Vellora Figma file.

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Node: `.node-version` = `22.16.0`

## Local

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

## Rules

- Component previews are 1:1 at their Figma desktop dimensions.
- Hover/focus/pressed/click are real interactions; forced states are shown separately for reference.
- No product option sets, clinical thresholds, timeout values, active-state copy, owners, or component statuses were fabricated.
- Any Figma inconsistency is surfaced as MATCH / MISMATCH / UNKNOWN.
- The 39 icon masters are encoded from the SVG paths exported from the Vellora Figma components; no external icon library is used.


## Cloudflare Workers Builds

Este projeto está preparado para deploy em `*.workers.dev`.

Configuração recomendada no Cloudflare:

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Production branch: `main`
- Root directory: `/` (ou vazio, se o `package.json` estiver na raiz)

O `wrangler.jsonc` publica `./dist` como Static Assets e usa `single-page-application` para o roteamento do React.

- Focus source of truth: `color/border/focus = #008C95`, synchronized with current Figma documentation.
