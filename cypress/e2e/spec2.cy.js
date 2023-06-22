/// <reference types="cypress" />

describe ('Testing the homepage of the Testing with Cypress', () => {

    beforeEach(() => {
        cy.visit('https://commitquality.com/')
    });

    it('Verify Add Product', () => {
        cy
          .get('[data-testid="navbar-addproduct"]')
          .should('be.visible')
          .and('contains.text', 'Add Product')
          .click()
    })
    it('Verify Practice', () => {
        cy
          .get('[data-testid="navbar-practice"]')
          .should('be.visible')
          .and('contains.text', 'Practice')
          .click()
    })

})