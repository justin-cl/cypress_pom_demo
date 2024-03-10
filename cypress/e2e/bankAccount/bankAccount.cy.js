/// <reference types="cypress" />

import { faker } from '@faker-js/faker';


const login = ()=>{
    cy.session("Bernier", () => {
        cy.visit("/");
        cy.get('#username').type("Katharina_Bernier");
        // In real automation project password should be stored in encrypted storage
        cy.get('#password').type("s3cret");
        cy.get('[data-test="signin-submit"]').click();
    })
}   

describe('Bank Account',() => { 
    // Login and visit before each test
    beforeEach(() => {
        login();
        cy.visit('/');
        cy.get('[data-test="sidenav-bankaccounts"]').click();
    }) 
    
    it.only("Add Bank", () => {
        const accountName = faker.finance.accountName();
       // cy.get('.MuiPaper-elevation1').scrollTo('top');
        cy.get('[data-test="bankaccount-new"]').click({force: true});
        cy.get('#bankaccount-bankName-input').type(accountName);
        cy.get('#bankaccount-routingNumber-input').type("555555555");
        cy.get('#bankaccount-accountNumber-input').type("7777777777");
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.get('[data-test="bankaccount-list"]').find('li').last().find('p').should('have.text',accountName + ' ');
     
    })

})