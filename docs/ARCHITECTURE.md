<!--
  ============================================================================
  PROPRIETÁRIO: Mauricio Spark
  MARCA:        SparkMauricio
  PROJETO:      Marco
  VERSÃO:       v1.0.0
  LINHAGEM:     SPARK
  ============================================================================
  Sistema de Registro de Recibos de Compra e Venda de Terra / Posse Rural
  COPYRIGHT: © 2026 / Mauricio Spark. Todos os direitos reservados.
  ============================================================================
-->

# Arquitetura do Sistema

## Design Arquitetural

O Marco adota uma arquitetura **Local-First** com padrão **Client-Side Only**. Esta escolha foi deliberada para garantir privacidade total dos dados, funcionamento offline e simplicidade de deployment.

### Componentes Principais

1. **Camada de Apresentação (View)**
   - HTML5 semântico estruturando o formulário
   - CSS3 com variáveis para temas e responsividade
   - Interface otimizada para impressão nativa do navegador

2. **Camada de Lógica (Controller)**
   - JavaScript vanilla (ES6+) manipulando o DOM
   - Validações em tempo real (CPF, valores monetários)
   - Cálculos automáticos (área do terreno)
   - Integração com APIs nativas do navegador (Geolocalização)

3. **Camada de Dados (Model)**
   - DOM como fonte de dados temporária
   - Formatação e validação antes da persistência (impressão)
   - Sem banco de dados persistente (design intencional)

## Justificativa das Escolhas Técnicas

### Local-First Architecture

**Por que?**

- **Privacidade**: Dados sensíveis (CPF, valores, localização) nunca deixam o dispositivo
- **Autonomia**: Funciona sem internet, essencial para áreas rurais
- **Simplicidade**: Não requer servidor, banco de dados ou deploy complexo
- **Custo**: Zero custo de infraestrutura e manutenção

**Trade-offs aceitos:**

- Sem sincronização entre dispositivos
- Sem backup automático na nuvem
- Sem colaboração em tempo real

### Vanilla JavaScript (Sem Frameworks)

**Por que?**

- **Performance**: Carregamento instantâneo, sem dependências externas
- **Compatibilidade**: Funciona em qualquer navegador moderno
- **Manutenibilidade**: Código simples e fácil de entender
- **Tamanho**: Arquivos pequenos, fácil de distribuir

### CSS com Variáveis

**Por que?**

- **Temas**: Suporte nativo a tema escuro via `prefers-color-scheme`
- **Manutenção**: Alterações centralizadas em `:root`
- **Performance**: Sem pré-processadores, processamento nativo

### API de Geolocalização Nativa

**Por que?**

- **Privacidade**: Sem intermediação de serviços terceiros
- **Precisão**: Acesso direto ao hardware GPS do dispositivo
- **Custo**: Gratuito e sem limites de requisição

## Fluxo de Dados

### 1. Interação do Usuário (Input)

```
Usuário digita no campo → Evento 'input' disparado → Validação assíncrona
```

**Exemplo - CPF:**

1. Usuário digita "12345678901"
2. Event listener captura o input
3. Função `formatarCPF()` aplica máscara: "123.456.789-01"
4. DOM atualizado com valor formatado
5. Evento 'blur' dispara validação completa
6. Se inválido: borda vermelha, mensagem de erro

### 2. Cálculo de Área

```
Input (largura/comprimento) → parseFloat() → Cálculo matemático → Formatação → DOM
```

**Fluxo:**

1. Usuário digita largura: 50m
2. Usuário digita comprimento: 100m
3. Event listener em ambos campos dispara `calc()`
4. ParseFloat converte strings para números
5. Cálculo: 50 × 100 = 5000 m²
6. Conversão: 5000 / 10000 = 0.5 ha
7. Formatação: "5.000 m² (0,5 ha)"
8. Atualização do elemento `#calc` no DOM
9. Preenchimento automático do campo `#area` se vazio

### 3. Geolocalização

```
Botão clicado → Verificação de suporte → navigator.geolocation → Coordenadas → Formatação → DOM
```

**Fluxo:**

1. Usuário clica "Usar minha localização atual"
2. Sistema verifica `navigator.geolocation`
3. Se não suportado: mensagem de erro
4. Se suportado: `getCurrentPosition()` com configurações:
   - `enableHighAccuracy: true`
   - `timeout: 10000ms`
   - `maximumAge: 0`
5. Sucesso: latitude/longitude extraídas
6. Formatação: "-3.11900, -60.02170"
7. Preenchimento do campo `#gps`
8. Feedback visual ao usuário

### 4. Impressão

```
Usuário clica imprimir → window.print() → @media print CSS → Renderização → PDF/Físico
```

**Fluxo:**

1. Usuário clica "Imprimir / salvar PDF"
2. Navegador abre diálogo de impressão
3. CSS `@media print` entra em ação:
   - Remove barra de botões
   - Remove hints e mensagens de ajuda
   - Remove header com logo
   - Simplifica estilos (remove sombras, cores)
   - Força fundo branco e texto preto
4. Usuário escolhe impressora ou "Salvar como PDF"
5. Documento gerado pronto para uso

## Segurança e Privacidade

### Proteção de Dados

- **Zero persistência**: Dados não são salvos em localStorage, cookies ou IndexedDB
- **Sem tracking**: Sem analytics, pixels ou scripts de terceiros
- **Sem requisições externas**: Funciona completamente offline
- **Sanitização**: Validações de entrada previnem injeção de scripts

### Validação de CPF

Algoritmo implementado:

1. Remove caracteres não numéricos
2. Verifica se tem 11 dígitos
3. Verifica se não são todos iguais (ex: 111.111.111-11)
4. Calcula primeiro dígito verificador
5. Calcula segundo dígito verificador
6. Retorna validade final

## Escalabilidade

Embora o sistema seja monolítico por design, a arquitetura permite evolução:

- **Modularização**: JavaScript pode ser dividido em módulos ES6
- **Componentização**: HTML pode ser refatorado para Web Components
- **State Management**: Redux ou Zustand podem ser adicionados se necessário
- **Build System**: Vite ou Webpack podem ser introduzidos para otimização

No entanto, a simplicidade atual é uma feature, não um bug - priorizando acessibilidade e facilidade de uso sobre complexidade técnica.
