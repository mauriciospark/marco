<!--
  ============================================================================
  PROPRIETÁRIO: Mauricio Spark
  MARCA:        SparkMauricio
  PROJETO:      Marco
  VERSÃO:       v1.1.0
  LINHAGEM:     SPARK
  ============================================================================
  Sistema de Registro de Recibos de Compra e Venda de Terra / Posse Rural
  COPYRIGHT: © 2026 / Mauricio Spark. Todos os direitos reservados.
  ============================================================================
-->

# Guia de Contribuição

Este documento estabelece as diretrizes para contribuir com o projeto Marco. Seguir estas práticas garante consistência, qualidade e facilidade de manutenção do código.

## Princípios Gerais

- **Simplicidade**: Mantenha o código simples e direto. Evite over-engineering.
- **Privacidade em primeiro lugar**: Nunca adicione código que envie dados para servidores externos.
- **Compatibilidade**: Mantenha suporte a navegadores modernos (Chrome, Firefox, Safari, Edge).
- **Acessibilidade**: Garanta que o sistema seja usável por pessoas com diferentes níveis de alfabetização digital.
- **Performance**: Evite dependências pesadas. O sistema deve carregar instantaneamente.

## Fluxo de Contribuição

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
git clone https://github.com/seu-usuario/marco.git
cd marco
```

### 2. Criação de Branch

Use um branch descritivo para sua contribuição:

```bash
# Padrão: tipo/sobre-o-que-e
git checkout -b feature/validacao-cnpj
git checkout -b fix/borda-cpf-invalido
git checkout -b docs/atualizacao-readme
git checkout -b style/tema-claro-melhorado
```

**Tipos de branch:**

- `feature/`: Novas funcionalidades
- `fix/`: Correção de bugs
- `docs/`: Atualizações de documentação
- `style/`: Melhorias de estilo e UI
- `refactor/`: Refatoração sem mudança de comportamento
- `test/`: Adição ou melhoria de testes

### 3. Desenvolvimento

#### Padrões de Código

**JavaScript:**

- Use `const` e `let`, nunca `var`
- Use arrow functions para callbacks
- Use template literals para strings
- Indentação: 2 espaços
- Máximo 80 caracteres por linha
- Comentários apenas quando necessário para explicar lógica complexa

**Exemplo aceitável:**

```javascript
const formatarCPF = (value) => {
  const nums = value.replace(/\D/g, "");
  if (nums.length > 11) return value.slice(0, 14);
  return nums.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
```

**HTML:**

- Use elementos semânticos (`<main>`, `<section>`, `<label>`)
- Atributos `aria-label` para acessibilidade
- Atributos `autocomplete` para UX
- Indentação: 2 espaços

**CSS:**

- Use variáveis CSS para cores e valores repetidos
- Mobile-first: escreva estilos para mobile primeiro, depois desktop
- Use unidades relativas (`rem`, `%`, `vw`)
- Evite `!important` a menos que absolutamente necessário

#### Validações Obrigatórias

Antes de submeter sua contribuição, verifique:

1. **Teste manuais:**
   - [ ] Funciona em Chrome
   - [ ] Funciona em Firefox
   - [ ] Funciona em Safari (se possível)
   - [ ] Funciona em Edge (se possível)
   - [ ] Funciona em mobile (responsivo)
   - [ ] Funciona offline
   - [ ] Impressão funciona corretamente

2. **Validações de código:**
   - [ ] Não há `console.log()` deixados no código
   - [ ] Não há código comentado
   - [ ] Variáveis têm nomes descritivos
   - [ ] Funções têm nomes descritivos
   - [ ] Comentários são necessários e claros

3. **Privacidade:**
   - [ ] Não há requisições HTTP para domínios externos
   - [ ] Não há código de analytics ou tracking
   - [ ] Não há dependências de CDNs externos

### 4. Commit

Use mensagens de commit claras e seguindo o padrão Conventional Commits:

```bash
# Padrão: tipo(scope): descrição

git commit -m "feat(adicionar): nova função de cálculo de perímetro"
git commit -m "fix(cpf): correção na validação de CPF com dígito zero"
git commit -m "docs(readme): atualização de instruções de instalação"
git commit -m "style(css): melhoria do contraste no tema escuro"
```

**Tipos:**

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudança na documentação
- `style`: Mudança de formatação/estilo (sem impacto no código)
- `refactor`: Refatoração de código
- `test`: Adição ou atualização de testes
- `chore`: Mudanças em build process, ferramentas, etc.

### 5. Pull Request

Ao abrir um PR, inclua:

**Título:** Descrição clara do que foi feito

```
feat: Adicionar validação de CNPJ
```

**Descrição:**

```markdown
## O que foi alterado

- Adicionada função de validação de CNPJ
- Implementada máscara automática (00.000.000/0000-00)
- Adicionado feedback visual para CNPJ inválido

## Por que

Usuários solicitaram suporte para CNPJ em transações com empresas rurais.

## Testes realizados

- [x] Testado com CNPJ válido
- [x] Testado com CNPJ inválido
- [x] Testado em desktop e mobile
- [x] Testado offline

## Screenshots (se aplicável)

(Adicionar capturas de tela se a alteração for visual)
```

## Revisão de Código

### Checklist para Revisores

Ao revisar um PR, verifique:

- [ ] O código segue os padrões estabelecidos
- [ ] A alteração não quebra funcionalidades existentes
- [ ] A privacidade dos dados é mantida
- [ ] A acessibilidade não é prejudicada
- [ ] O código está documentado se necessário
- [ ] Não há dependências externas adicionadas
- [ ] O teste manual foi realizado

### Feedback Construtivo

Ao solicitar alterações:

- Seja específico sobre o que precisa mudar
- Explique o porquê da solicitação
- Ofereça sugestões quando apropriado
- Seja respeitoso e colaborativo

## Issues

Ao reportar bugs ou solicitar features:

**Bug Report:**

```markdown
## Descrição

Breve descrição do bug

## Passos para reproduzir

1. Vá para...
2. Clique em...
3. Veja o erro

## Comportamento esperado

O que deveria acontecer

## Comportamento atual

O que realmente acontece

## Ambiente

- Navegador: [Chrome/Firefox/etc]
- Versão: [versão]
- Sistema operacional: [Windows/Mac/Linux]
```

**Feature Request:**

```markdown
## Descrição

Descrição clara da funcionalidade desejada

## Motivação

Por que esta funcionalidade é importante

## Solução proposta

Sugestão de como implementar (opcional)
```

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a Licença MIT, conforme estabelecido no arquivo LICENSE.

## Questões?

Para dúvidas, abra uma issue com a tag `question`.
