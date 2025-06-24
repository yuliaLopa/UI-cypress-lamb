///<reference types = 'cypress' />
import chai from 'chai';
import { faker } from '@faker-js/faker';
import { InputFormPage } from './pages/inputFormPage'


const formPage = new InputFormPage
const randomName = faker.person.fullName()
const randomEmail = faker.internet.email()
const randomPassword = faker.internet.password()
const randomCompany = faker.company.name()
const randomWebsite = faker.internet.url()
const randomCity = faker.location.city()
const randomAdress1 = faker.location.streetAddress()
const randomAdress2 = faker.location.secondaryAddress()
const randomState = faker.location.state()
const randomZipCode = faker.location.zipCode()
const country = 'United States';

describe('Input Form Demo', () => {
  it('Page exist', () => {
    formPage.visit();
    formPage.VerifyUrl();
    formPage.VerifyTitle();
    formPage.VerifyHeadling();

    formPage.fillName(randomName)
    formPage.fillEmail(randomEmail)
    formPage.fillPassword(randomPassword)
    formPage.fillCompany(randomCompany)
    formPage.fillWebsite(randomWebsite)
    formPage.fillCity(randomCity)
    formPage.fillAdress1(randomAdress1)
    formPage.fillAdress2(randomAdress2)
    formPage.fillState(randomState)
    formPage.fillZipCode(randomZipCode)
    formPage.selectCountry(country);
    formPage.submitButton()
   
  });
});
