// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />

import { loginPage } from "../pages/loginPage.js"
const loginPageObj = new loginPage();


Cypress.Commands.add('login',(email,password)=>{
    cy.visit('')
    cy.get(loginPageObj.webloactors.username).type(email)
    cy.get(loginPageObj.webloactors.password).type(password,{ log: false })
    cy.get(loginPageObj.webloactors.loginButton).click()
})