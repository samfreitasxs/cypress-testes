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
          .get('[data-testid="product-textbox"]')
          .type('Product 2')
          .get('[data-testid="price-textbox"]')
          .type('15')
          .get('[data-testid="submit-form"]')
          .click()
    })
    it('Verify Practice', () => {
        cy
          .get('[data-testid="navbar-practice"]')
          .should('be.visible')
          .and('contains.text', 'Practice')
          .click()
          .get('[data-testid="practice-general"]')
          .click()
          .get('[data-testid="basic-click"]')
          .click()

    })
    it('Verify Login', () => {
        cy
          .get('[data-testid="navbar-login"]')
          .should('be.visible')
          .and('contains.text', 'Login')
          .click()
          .get('[data-testid="username-textbox"]').type('samuel')
          .get('[data-testid="password-textbox"]').type('123')
          .get('[data-testid="login-button"]').click()
          cy.get('.error')
          
    })

})