describe('Quotes App',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('Check if the elements exist on the page',()=>{
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        submitBtn().should('exist')
    })

    it('Fill in the inputs',()=>{
        nameInput().should('have.value',"").type("Michael Guerrero").should('have.value',"Michael Guerrero")
        emailInput().should('have.value',"").type("mike@mike.com").should('have.value',"mike@mike.com")
        passwordInput().should('have.value',"").type("12345678").should('have.value',"12345678")
        submitBtn().should('exist')
    })

    it('Can check terms of service', () => {
        tosCheckbox().check().should('be.checked')
    })

    it('Check to see if user can submit with values', () => {
        nameInput().should('have.value',"").type("Michael Guerrero").should('have.value',"Michael Guerrero")
        emailInput().should('have.value',"").type("mike@mike.com").should('have.value',"mike@mike.com")
        passwordInput().should('have.value',"").type("12345678").should('have.value',"12345678")
        tosCheckbox().check().should('be.checked')
        submitBtn().should('not.be.disabled')
    })

    it('Check to see if validation works', () => {
        nameInput().should('have.value',"").type("Michael Guerrero").should('have.value',"Michael Guerrero")
        emailInput().should('have.value',"").type("mike@mike.com").should('have.value',"mike@mike.com")
        passwordInput().should('have.value',"").type(" ").type('{backspace}').should('have.value',"")
        cy.contains('Password is required!')
    })
    
})

const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const tosCheckbox = () => cy.get('input[name="tos"]')
const submitBtn = () => cy.get('button[id="submitBtn"]')

