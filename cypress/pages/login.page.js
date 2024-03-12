/// <reference types="cypress" />

export class LoginPage {
    inputUserName() {return cy.get('#username');}
    inputPassword() {return cy.get('#password');}
    buttonSignIn() {return cy.get('[data-test="signin-submit"]');}

    login() {
        cy.session("Bernier", () => {
            cy.visit("/");
            this.inputUserName().type("Katharina_Bernier");
            // In real automation project password should be stored in encrypted storage
            // Todo: Put username and password in a fixture
            this.inputPassword().type("s3cret");
            this.buttonSignIn().click();
        })
    }
}
