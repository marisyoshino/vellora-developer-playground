# FIGMA GAPS — definições intencionalmente não inventadas

A release 2.0.0 fecha a paridade visual e comportamental verificável. Os itens abaixo dependem de decisão de produto, integração ou governança e permanecem explicitamente fora do contrato visual.

1. **Status / Owner / versão específica por componente** — não existem nos metadados inspecionados. O Playground mostra `UNKNOWN — NEEDS DEFINITION`; a versão `2.0.0` é da release do sistema.
2. **Coleções de opções do Select** — `Select / Option` e a composição aberta existem; as opções de negócio continuam consumer-defined. Os exemplos do Playground são `EXAMPLE DATA`.
3. **Limites de Input e Textarea** — são definidos por campo de produto. “500 caracteres” é example copy do Textarea e não define `maxLength`.
4. **Regra de grupo para Checkbox Indeterminate** — o estado visual existe, mas a regra de agregação do grupo não está definida nesta família.
5. **Persistência do Switch** — rollback é documentado; API/backend, timeout e copy de falha pertencem à integração.
6. **Conteúdo de Tabs/List** — a composição existe; labels e painéis são conteúdo consumidor.
7. **Janela temporal da ação do Appointment Card** — Upcoming/Today podem expor ação, mas o intervalo real é regra de produto.
8. **Timeout do Device Check** — `Checking` não deve ser indefinido; o valor temporal é definido pela integração.
9. **Thresholds de Face Guidance** — estabilidade/tracking pertencem à implementação validada.
10. **Thresholds e retry real de Camera Guidance** — processamento, permissões e recovery pertencem ao fluxo consumidor.
11. **Bottom navigation como família publicada** — o padrão existe nas telas mobile do produto, mas não é uma família publicada nesta release do Design System.
