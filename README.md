# Banco Web Tests

Este projeto demonstra como automatizar testes de uma aplicação bancária web utilizando Cypress e JavaScript. Ele foi desenvolvido como material prático para os alunos da Mentoria 2.0.

## Objetivo

Apresentar, de forma prática, como estruturar, organizar e executar testes automatizados de ponta a ponta (E2E) em uma aplicação web.

O projeto inclui testes de login e transferência bancária, comandos personalizados para reutilizar ações comuns e geração de relatórios em HTML.

## Componentes do Projeto

- **Cypress**: ferramenta utilizada para automatizar os testes E2E.
- **JavaScript**: linguagem usada para escrever os testes e comandos.
- **Custom Commands**: comandos personalizados para reutilizar ações comuns.
- **cypress-mochawesome-reporter**: ferramenta usada para gerar relatórios HTML dos testes.

## Estrutura do Projeto

- `cypress/e2e/`: arquivos dos testes automatizados.
- `cypress/fixtures/`: dados de apoio utilizados pelos testes.
- `cypress/support/commands/`: comandos personalizados do Cypress.
- `cypress/reports/`: relatórios gerados após a execução dos testes.
- `cypress/screenshots/`: capturas de tela dos testes, quando geradas.
- `cypress/videos/`: vídeos das execuções, quando gerados.

## Pré-requisitos

- Node.js instalado.
- npm instalado.
- A API `banco-api` em execução.
- A aplicação web `banco-web` em execução.

Repositórios da aplicação utilizada nos testes:

- [Banco API](https://github.com/juliodelimas/banco-api)
- [Banco Web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:

   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   ```

2. Entre na pasta do projeto:

   ```bash
   cd banco-web-tests
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

Antes de executar os testes, inicie a API e a aplicação web.

## Execução dos Testes

Para executar os testes em modo headless:

```bash
npm test
```

Para abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Para executar os testes com a interface do navegador:

```bash
npm run cy:headed
```

## Relatórios

Após a execução dos testes, o relatório HTML é gerado na pasta:

```text
cypress/reports/html/index.html
```

Abra esse arquivo em um navegador para visualizar os resultados detalhados.

## Testes Automatizados

Os testes estão organizados em arquivos dentro de `cypress/e2e/`, incluindo:

- `login.cy.js`: cenários de login com credenciais válidas e inválidas.
- `transferencia.cy.js`: cenários de transferência bancária.

## Comandos Personalizados

Os comandos personalizados ficam em `cypress/support/commands/` e ajudam a reutilizar ações nos testes. Entre eles:

- `cy.fazerLoginComCredenciaisValidas()`: realiza o login com dados válidos.
- `cy.fazerLoginComCredenciaisInvalidas()`: tenta fazer login com dados inválidos.
- `cy.selecionarOpcaoNaCombobox(campo, opcao)`: seleciona uma opção em um campo.
- `cy.realizarTransferencia(contaOrigem, contaDestino, valor)`: preenche e realiza uma transferência.
- `cy.verificarMensagemNoToast(mensagem)`: verifica o texto exibido na notificação.

Exemplo de uso:

```javascript
cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '6000')
cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
```

## Contribuição

Sugestões de melhoria podem ser registradas por meio de issues ou pull requests.

---

Mentoria 2.0 | Júlio de Lima