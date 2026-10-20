describe('Transferências', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fazerLoginComCredenciaisValidas()

    // Comando anterior
    //cy.fixture('credenciais').then((credenciais) => { (comando antigo 
        //cy.get('#username').click().type(credenciais.valida.usuario) 
        //cy.get('#senha').click().type(credenciais.valida.senha) 
    //})

    //cy.contains('button', 'Entrar').click() old
  })

  
    it('Deve transferir quando informo dados e valor válidos', () => {
  // Comando anterior para selecionar a conta de origem:
  // cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
  // cy.get('@campo-conta-origem').click()
  // cy.get('@campo-conta-origem').contains('João da Silva').click()

  // Comando anterior para selecionar a conta de destino:
  // cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
  // cy.get('@campo-conta-destino').click()
  // cy.get('@campo-conta-destino').contains('Maria Oliveira').click()

  // Act
// Comandos anteriores para realizar a transferência:
// cy.selecionarOpcaoNaCombobox('conta-origem', 'João da Silva')
// cy.selecionarOpcaoNaCombobox('conta-destino', 'Maria Oliveira')
// cy.get('#valor').click().type('11')
// cy.contains('button', 'Transferir').click()

cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '11')

  // Comando anterior para verificar a mensagem:
  // cy.get('.toast').should('have.text', 'Transferência realizada!')

  // Assert
    cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
    
    // Act
// Comandos anteriores para realizar a transferência:
// cy.selecionarOpcaoNaCombobox('conta-origem', 'João da Silva')
// cy.selecionarOpcaoNaCombobox('conta-destino', 'Maria Oliveira')
// cy.get('#valor').click().type('6000')
// cy.contains('button', 'Transferir').click()

cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '6000')

    // Assert
    cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00')
    })
})