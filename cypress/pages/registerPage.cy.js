/// <reference types="Cypress" />

export class registerPage{


    webLoactors={
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        confirmPassword: "#input-confirm",
        checkbox: "[type='checkbox']",
        button: ".btn.btn-primary"
    }

    visitRegistrationPage(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.webLoactors.firstName).type(FName)
    }

    enterLastName(LName){
        cy.get(this.webLoactors.lastName).type(LName)
    }

    enterEmail(Email){
        cy.get(this.webLoactors.email).type(Email)
    }

    enterPhone(Phone){
        cy.get(this.webLoactors.telephone).type(Phone)
    }

    enterPassword(Password){
        cy.get(this.webLoactors.password,{ log: false }).type(Password,{ log: false })
        cy.get(this.webLoactors.confirmPassword,{ log: false }).type(Password,{ log: false })
    }

    checkCheckbox(){
        cy.get(this.webLoactors.checkbox).click()
        
    }

    submitButton(){
        cy.get(this.webLoactors.button).click()
        
    }

    emptyFunc(){

    }

    





}