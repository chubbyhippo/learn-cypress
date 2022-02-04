describe("My First Test Suite", function () {
    it("My First Test case", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        cy.get(".product").should("have.length", 5);
        cy.get(".product:visible").should("have.length", 4);
        cy.get(".products").find(".product").should("have.length", 4);
        cy.get(":nth-child(1) > .stepper-input > .increment").click();
        cy.get(":nth-child(1) > .stepper-input > .increment").click();
        cy.get(".products").find(".product").eq(0).contains("ADD TO CART").click();
        cy.get(".products").find(".product").each((element) => {
            const vegText = element.find("h4.product-name").text();
            if (vegText.includes("Cashews")) {
                cy.wrap(element).find("button").click();
            }
        });
        cy.get(".brand").then(logoElement => {
            cy.log(logoElement.text());
        });

    });
});
