describe('Testes das APIs FakeRestAPI v1', () => {
    it('Deve obter a lista de atividades', () => {
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/Activities')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.be.greaterThan(0)
        })
    })
    it('Deve obter a lista de atividades', () => {
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/Activities')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.be.greaterThan(0)
        })
    })

    
    it('Deve obter a lista de livros', () => {
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/Books')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.be.greaterThan(0)
        })
    })
  
    it('Deve obter a lista de capas de livros', () => {
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/CoverPhotos')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.be.greaterThan(0)
        })
    })
  
    
    it('Deve obter a lista de usuários', () => {
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/Users')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          expect(response.body.length).to.be.greaterThan(0)
        })
    })
  })
  