/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { LoginPage } from '../../pages/login.page';
  

describe('Bank Account',() => { 
    // Login and visit before each test
    beforeEach(() => {
        const loginPage = new LoginPage();
        loginPage.login();
        cy.visit('/');
        cy.get('[data-test="sidenav-bankaccounts"]').click();
    }) 
    
    it("Add Bank", () => {
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