describe("My First Test Suite", function () {
    it("My First Test case", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should("have.length", 4)
    })

})
