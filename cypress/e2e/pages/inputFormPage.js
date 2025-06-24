import { should } from "chai"

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
    
    }
    fillName(name){
        cy.get('input[name="name"]').click().wait(100)
        .should('have.attr', 'placeholder', 'Name')
        .should('be.visible')
        .type(name)
    }

    fillEmail(email){
        cy.get('input[placeholder="Email"]')
        .should('have.attr', 'placeholder', 'Email')
        .should('be.visible')
        .type(email, {force: true})
    }

    fillPassword(password){
        cy.get('input[placeholder="Password"]')
        .should('have.attr', 'placeholder', 'Password')
        .should('be.visible')
        .type(password, {force: true})
    }

    fillCompany(company){
        cy.get('#company')
        .should('have.attr', 'placeholder', 'Company')
        .should('be.visible')
        .type(company, {force: true})
    }
    
    fillWebsite(website){
        cy.get('#websitename')
        .should('have.attr', 'placeholder', 'Website')
        .should('be.visible')
        .type(website, {force: true})
    }

    fillCity(city){
        cy.get('#inputCity')
        .should('have.attr', 'placeholder', 'City')
        .should('be.visible')
        .type(city, {force: true} )
    }
    
    fillAdress1(adress1){
        cy.get('#inputAddress1')
        .should('have.attr', 'placeholder', 'Address 1')
        .should('be.visible')
        .type(adress1, {force: true})
    }

    fillAdress2(adress2){
        cy.get('#inputAddress2')
        .should('have.attr', 'placeholder', 'Address 2')
        .should('be.visible')
        .type(adress2, {force: true})
    }

    fillState(state){
        cy.get('#inputState')
        .should('have.attr', 'placeholder', 'State')
        .should('be.visible')
        .type(state, {force: true})
    }

    fillZipCode(zipCode){
        cy.get('#inputZip')
        .should('have.attr', 'placeholder', 'Zip code')
        .should('be.visible')
        .type(zipCode, {force: true})
    }

    selectCountry(country) {
        cy.get('select[name="country"]').first().select('United States');
          
        
    }

    submitButton(button) {
        cy.get('button[type="submit"]:visible').click()
        .should('have.length', 1).and('not.be.disabled')

    }
}

