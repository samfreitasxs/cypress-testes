describe('Testes da API de Cores', () => {
  it('Deve retornar uma cor com o nome "fuchsia rose"', () => {
    cy.request('https://reqres.in/api/unknown/2')
      .its('status')
      .should('equal', 200) // Verifica se a resposta da API é bem-sucedida

    cy.request('https://reqres.in/api/unknown/2')
      .its('body.data')
      .should('have.property', 'name', 'fuchsia rose') // Verifica se a cor retornada tem o nome "fuchsia rose"
  })

  it('Deve conter a URL de suporte e um texto de apoio', () => {
    cy.request('https://reqres.in/api/unknown/2')
      .its('status')
      .should('equal', 200) // Verifica se a resposta da API é bem-sucedida

    cy.request('https://reqres.in/api/unknown/2')
      .its('body.support')
      .should('have.property', 'url') // Verifica se a resposta contém uma URL de suporte

    cy.request('https://reqres.in/api/unknown/2')
      .its('body.support')
      .should('have.property', 'text') // Verifica se a resposta contém um texto de apoio
  })
})
