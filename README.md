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

# Marco — (Linhagem SPARK)

Sistema de registro de recibos de compra e venda de terras rurais, projetado para facilitar a formalização de transações imobiliárias em comunidades rurais com validação automática de dados e geolocalização integrada.

## Descrição

O Marco é uma aplicação web local-first que permite a criação e impressão de recibos de compra e venda de terras e posse rural. O sistema resolve o problema da falta de formalização em transações rurais, oferecendo uma interface intuitiva com validação automática de CPF, cálculo de área do terreno, geolocalização GPS e formatação automática de valores monetários. Tudo funciona localmente no navegador, sem necessidade de conexão com a internet ou servidores externos.

## Stack

### Frontend

- HTML5
- CSS3 (com variáveis CSS e suporte a tema escuro)
- JavaScript (ES6+)

### Bibliotecas e Ferramentas

- API de Geolocalização nativa do navegador
- API de impressão nativa do navegador
- Local-First Architecture (sem dependências externas)

## Funcionalidades

- **Cálculo automático de área**: Calcula a área em m² e hectares a partir da largura e comprimento do terreno
- **Validação de CPF**: Validação automática de CPFs digitados com feedback visual de erro
- **Formatação automática**: Máscara automática para CPF (000.000.000-00) e valores monetários (R$)
- **Geolocalização GPS**: Captura automática das coordenadas GPS do local via API nativa
- **Preenchimento automático de data**: Data atual preenchida automaticamente no formato brasileiro
- **Impressão/PDF**: Geração de recibos prontos para impressão ou salvamento como PDF
- **Tema escuro**: Suporte automático a tema escuro conforme preferência do sistema
- **Responsivo**: Interface adaptada para desktop e dispositivos móveis
- **Local-First**: Funciona completamente offline, sem necessidade de servidor

## Como Rodar

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd marco
```

2. Abra o arquivo `index.html` diretamente no navegador:

```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou simplesmente arraste o arquivo `index.html` para qualquer navegador moderno.

Não é necessário instalar dependências ou configurar servidores - o sistema funciona totalmente no navegador.
