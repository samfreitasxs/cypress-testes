describe('Testes da API de Moedas', () => {
  it('Deve verificar se a moeda Bitcoin está presente', () => {
    cy.request('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
      .its('body')
      .should('include', { "btc": "Bitcoin" }) // Verifica se a moeda Bitcoin está presente
  })

  it('Deve verificar se a moeda Ethereum está presente', () => {
    cy.request('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
      .its('body')
      .should('include', { "eth": "Ethereum" }) // Verifica se a moeda Ethereum está presente
  })

  it('Deve verificar se a moeda Cardano está presente', () => {
    cy.request('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
      .its('body')
      .should('include', { "ada": "Cardano" }) // Verifica se a moeda Cardano está presente
  })
})
