/// <reference types="Cypress" />


import productData from "../fixtures/productData.js"
import loginData from "../fixtures/loginData.js"
import { accountPage } from "../pages/accountPage.cy.js"
import { productPage } from '../pages/productPage.cy.js';

const productPageObj = new productPage();
const accountPageObj = new accountPage();

describe("Add item to cart",()=>{
    before(()=>{
        cy.login(loginData.username, loginData.password)
        
    })

    it("TC:1 - Search Macbook and then add to cart and assert the success message",()=>{
        accountPageObj.searchProduct(productData.productName) //search for macbook and click on search button
        productPageObj.addToCartMacbook()
        productPageObj.verifySuccessMessage().should('contain',productData.successMessage).and('contain',productData.productName)

    })
})