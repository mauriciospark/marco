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

# Changelog

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.1.0] - 2026-10-05

### Added

- Funcionalidade de upload de fotos da propriedade
- Galeria de fotos com visualização em grid
- Botão de remoção de fotos individuais
- Suporte a múltiplas fotos simultâneas
- Validação de tipo de arquivo (apenas imagens)
- Galeria oculta na impressão para economizar tinta

### Changed

- Reorganização das seções do formulário (seção 5 agora é "Fotos da propriedade")
- Função limpar() agora também limpa a galeria de fotos

## [1.0.0] - 2026-09-30

### Added

- Cabeçalhos de copyright e documentação em todos os arquivos do projeto (HTML, CSS, JS, Markdown)
- Estrutura de documentação completa (README, LICENSE, ABOUT, ARCHITECTURE, CONTRIBUTING, CHANGELOG)
- Licença MIT oficial em nome de Mauricio Spark
- Funcionalidade de cálculo automático de área do terreno (m² e hectares)
- Validação automática de CPF com algoritmo oficial
- Formatação automática de CPF (máscara 000.000.000-00)
- Formatação automática de valores monetários (R$)
- Preenchimento automático da data atual no formato brasileiro
- Integração com API de geolocalização GPS nativa do navegador
- Captura automática de coordenadas GPS com precisão alta
- Feedback visual de erro para CPF inválido (borda vermelha)
- Feedback visual durante obtenção de localização (campo desabilitado, mensagem de carregamento)
- Tratamento específico de erros de geolocalização (permissão negada, timeout, indisponibilidade)
- Botão de impressão/salvamento como PDF
- Botão de limpeza de todos os campos com confirmação
- Suporte a tema escuro automático (prefers-color-scheme)
- Design responsivo para desktop e dispositivos móveis
- Logo institucional centralizada no header
- Favicon personalizado
- Atributos `name` em todos os campos para organização
- Atributos `autocomplete` para preenchimento automático do navegador
- Atributos `inputmode` para teclado adequado em dispositivos móveis
- Transições suaves em botões e inputs
- Estados hover e active para feedback visual
- Estados de foco destacados em inputs
- Estado desabilitado estilizado para campos temporariamente inativos
- Sombras sutis para profundidade visual
- Estilos otimizados para impressão (remoção de elementos não essenciais)
- Estrutura semântica HTML5
- Variáveis CSS para fácil manutenção de temas
- Arquitetura Local-First (funciona completamente offline)
- JavaScript moderno (ES6+ com const/let, arrow functions, template literals)
- Event listener `DOMContentLoaded` para garantir carregamento do DOM
- Tratamento de erro robusto em geolocalização com try-catch

### Changed

- Modernização completa do código JavaScript (substituição de var por const/let)
- Refatoração para uso de arrow functions
- Encapsulamento do código em DOMContentLoaded
- Melhoria na usabilidade com feedback visual em tempo real
- Aumento do padding do main para acomodar melhor o conteúdo
- Melhoria na legibilidade com cores de contraste ajustadas
- Otimização do desempenho com event listeners eficientes

### Fixed

- Correção de validação de área negativa (agora aceita apenas valores positivos)
- Correção de mensagem padrão quando campos de área são limpos
- Correção de tratamento de erro em geolocalização (mensagens específicas por tipo de erro)
- Correção de formatação de CPF para impedir entrada de mais de 11 dígitos
- Correção de foco visual em inputs durante geolocalização (campo desabilitado)
- Correção de impressão (remoção de header com logo para economizar tinta)

## [Unreleased]

---

## Convenções de Changelog

### [Added]

Novas funcionalidades, recursos ou capacidades

### [Changed]

Mudanças em funcionalidades existentes (refatorações, melhorias)

### [Fixed]

Correções de bugs ou problemas

### [Removed]

Remoção de funcionalidades ou recursos (depreciados)

### [Security]

Correções de segurança ou vulnerabilidades

### [Deprecated]

Funcionalidades marcadas para remoção em versões futuras
