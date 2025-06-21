///<reference types = 'cypress' />
import { faker } from '@faker-js/faker';
import { InputFormPage } from './pages/inputFormPage'


const formPage = new InputFormPage
const randomName = faker.name.fullName()

describe('Input Form Demo', () => {
  it('Page exist', () => {
    formPage.visit();
    formPage.VerifyUrl();
    formPage.VerifyTitle();
    formPage.VerifyHeadling();

    // formPage.fillName(randomName)
   
  });
});
