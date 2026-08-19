# Vellora Developer Playground 2.0.1

Portal de engenharia do Vellora Design System, em React + TypeScript + Vite. O repositório mantém o contrato Figma ↔ Code ↔ Playground explícito, com componentes executáveis, State Labs, Responsive Lab, Edge Case Lab, acessibilidade, tokens, padrões e changelog.

## Inventário atual

- 20 famílias principais de componentes.
- 227 variantes nas famílias principais.
- 8 variantes de `Select / Option`.
- 235 variant nodes documentados no total.
- 39 ícones autorais.
- Composições formalizadas: Select aberto, Radio Group e Tabs/List.
- Baseline histórico preservado: 18 famílias / 213 variantes.

## Regras de paridade

- Previews de componentes usam dimensões reais do Figma; não são thumbnails escaladas.
- Controls expõem apenas a API pública documentada.
- Estados de referência são separados da interação real quando necessário.
- `EXAMPLE DATA` nunca é tratado como regra de produto.
- Thresholds, timeouts, max lengths, owners e regras de negócio ausentes permanecem `UNKNOWN — NEEDS DEFINITION`.
- Ícones usam os paths derivados dos masters do Vellora; não há biblioteca externa de ícones.

## Cloudflare Workers Builds

Repositório flat: os arquivos `.tsx`, `system.ts`, `app.css` e `tokens.css` ficam diretamente na raiz.

- Production branch: `main`
- Root directory: vazio
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Build output: `dist`
- Node: `.node-version` = `22.23.2`
- `index.html` aponta para `/main.tsx`

## Local

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

## Release 2.0.1

Correções de contrato incluídas: 6 combinações válidas de Appointment Card; Icon Button sem estado toggle inventado; Call Control sem `activeLabel`/`activeIcon`; Tabs/List funcional; IDs únicos de campos; breakpoint Desktop Header em 768 px; State Labs completos; Responsive e Edge Case Labs; documentação de loading, max length, retry e thresholds separada da API visual.

### Responsive/brand patch

- Responsive Lab usa container queries e não permite scroll horizontal nos frames de QA.
- Edge Case Lab ganhou espaçamento interno/vertical consistente.
- Button preserva comportamento Hug content no laboratório, em vez de esticar artificialmente.
- Desktop Header usa o SVG oficial fornecido em `public/vellora-logo.svg`.
