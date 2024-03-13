/// <reference types="cypress" />

class HomePage {
    get tabEveryone() {return  cy.get('[data-test="nav-public-tab"]');}
    get topTransaction() {return  cy.get('[data-test="transaction-item-4AvM8cN1DdS"]');} 
}

export const homePage =  new HomePage();