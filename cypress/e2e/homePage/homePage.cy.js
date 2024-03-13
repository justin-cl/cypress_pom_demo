/// <reference types="cypress" />

import { loginPage } from "../../pages/login.page";
import { homePage } from "../../pages/home.page";

describe('Home Page tests',() => { 
    // Login and visit before each test
    beforeEach(() => {
        loginPage.login();
        cy.visit('/');
    }) 
    
    it("Default tab", () => {
        homePage.tabEveryone.should('have.attr', 'aria-selected', 'true');
    })

    // Test is using the built-in assertions.  If top transaction is not found the test will fail.
    it("Verify first transaction is found on home page", () => {
        homePage.topTransaction;
    })

})



