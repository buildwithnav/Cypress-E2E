export class productPage {

    webloactors={
        addToCart:'Add to Cart',
        cartButton: '.btn.btn-inverse.btn-block.btn-lg.dropdown-toggle',
        successMessage: '.alert.alert-success.alert-dismissible'
    }

    addToCartMacbook(){
        cy.contains(this.webloactors.addToCar).first().click()
    }

    verifySuccessMessage(){
        return cy.get(this.webloactors.successMessage)
    }

    

}