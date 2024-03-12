/// <reference types="cypress" />

import { LoginPage } from "../../pages/login.page";


// const login = ()=>{
//     cy.session("Bernier", () => {
//         cy.visit("/");
//         cy.get('#username').type("Katharina_Bernier");
//         // In real automation project password should be stored in encrypted storage
//         cy.get('#password').type("s3cret");
//         cy.get('[data-test="signin-submit"]').click();
//     })
// }   

describe('Home Page tests',() => { 
    // Login and visit before each test
    beforeEach(() => {
        const loginPage = new LoginPage();
        loginPage.login();
        cy.visit('/');
    }) 
    
    it("Default tab", () => {
        cy.get('[data-test="nav-public-tab"]').should('have.attr', 'aria-selected', 'true');
    })

    it("Verify first transaction is found on home page", () => {
        cy.get('[data-test="transaction-item-4AvM8cN1DdS"]')
    })

})



