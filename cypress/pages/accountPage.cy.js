export class accountPage {

    weblocators={
        searchBar: ".form-control.input-lg",
        searchButton: ".btn.btn-default.btn-lg"
    }

    searchProduct(productName){
        cy.get(this.weblocators.searchBar).type(productName)
        cy.get(this.weblocators.searchButton).click()
    }

}