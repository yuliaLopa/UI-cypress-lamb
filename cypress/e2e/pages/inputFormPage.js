export class InputFormPage{
    visit() {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo')
    }

    VerifyUrl() {
        cy.url().should('eq', 'https://www.lambdatest.com/selenium-playground/input-form-demo')
    }

    VerifyTitle() {
        cy.title().should('include', 'Selenium Grid Online')
    }

    VerifyHeadling() {
        cy.get('h1').should('be.visible').should('have.text', 'Form Demo')
        cy.get('h2').should('be.visible').should('have.text', 'Input form validations')
    

    // fillName(name){
    //     cy.get('#name')
    //     .should('have.attr', 'placeholder', 'Name')
    //     .should('be.visible')
    //     .type(name, {force: true})
    // }
    }

}