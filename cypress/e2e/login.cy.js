describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir a entrada no sistema', () => {
    // Act

    cy.fazerLoginComCredenciaisValidas()
    // Comando anterior
    // cy.fixture('credenciais').then((credenciais) => { 
     //cy.get('#username').click().type('credenciais.valida.usuario') 
      //cy.get('#senha').click().type('credenciais.valida.usuario') 

      //cy.screenshot('apos-preencher-dados-validos') 

      //cy.contains('button', 'Entrar').click() 
      //cy.screenshot('apos-clicar-no-botao-entrar')

      // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar a mensagem de erro', () => {
    // Act
    cy.fazerLoginComCredenciaisInvalidas()

    // Comando anterior
    //cy.fixture('credenciais').then((credenciais) => { 
      //cy.get('#username').click().type('credenciais.invalida.usuario') 
      //cy.get('#senha').click().type('credenciais.invalida.usuario') 

      //cy.contains('button', 'Entrar').click() 

      // Assert
      
      // cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.') 
      cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
    
     })
  })

