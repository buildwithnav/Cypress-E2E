/// <reference types="Cypress" />
import testDataRegisterPage from "../fixtures/testDataRegisterPage.json"
import { registerPage } from "../pages/registerPage.cy.js";
const registerObj = new registerPage();

describe("Complete Registration Flow",()=>{
    before(()=>{
        registerObj.visitRegistrationPage();
    })
    it("TC1",()=>{
        registerObj.enterFirstName(testDataRegisterPage.personalInfo.name.firstName)
        registerObj.enterLastName(testDataRegisterPage.personalInfo.name.lastName)
        registerObj.enterEmail(testDataRegisterPage.personalInfo.email)
        registerObj.enterPhone(testDataRegisterPage.personalInfo.telephone)
        registerObj.enterPassword(testDataRegisterPage.loginDetails.password)
        registerObj.checkCheckbox()
        registerObj.submitButton()
        
    })
})