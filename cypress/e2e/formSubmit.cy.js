///<reference types = 'cypress' />
import { faker } from '@faker-js/faker';



describe('Form Submit Demo', () => {
  it('Page exist', () => {
    cy.visit(
      'https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo');
    cy.title().should('include', 'Selenium Grid Online')
    cy.url().should('eq', 'https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo')
    cy.get('h1').should('have.text', 'Form Submit Demo')

    const name = faker.person.fullName()
    cy.get('#title').type(name)
  });
});
