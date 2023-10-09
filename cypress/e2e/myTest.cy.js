/// <reference types= "cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
Cypress.Commands.add("addItem", () => {
  let RandomToSelect = Math.floor(Math.random() * 4);
  cy.get(".product-items").find(".product-item").eq(RandomToSelect).click();
  let RandomSize = Math.floor(Math.random() * 2);
  cy.get(".swatch-attribute-options")
    .find(".swatch-option")
    .eq(RandomSize)
    .click();
  cy.get(".swatch-attribute-options").find(".swatch-option").eq(0).click();
  cy.get(".stock > span")
    .invoke("text")
    .then((Text) => {
      if (Text == "In stock") {
        cy.get("#product-addtocart-button").click();
      } else {
        alert("sorry this item is not there");
      }
    });
});
describe("TestCases", () => {
  it.skip("Add random item from Women or Gear category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    let itemsSelect = ["Women", "Gear"];
    let RandomIndex = Math.floor(Math.random() * itemsSelect.length);
    cy.contains(itemsSelect[RandomIndex]).click({ force: true });
    let RandomToSelect = Math.floor(Math.random() * 4);
    cy.get(".product-items").find(".product-item").eq(RandomToSelect).click(); 
    if (RandomIndex == 0) {
      let RandomSize = Math.floor(Math.random() * 2);
      let RandomColor = Math.floor(Math.random() * 3);
      cy.get(".swatch-attribute-options")
        .find(".swatch-option")
        .eq(RandomSize)
        .click();
      cy.get(".swatch-attribute-options")
        .find(".color")
        .eq(RandomColor)
        .click();
      cy.get(".stock > span")
        .invoke("text")
        .then((Text) => {
          if (Text == "In stock") {
            cy.get("#product-addtocart-button").click();
          } else {
            alert("sorry this item is not there");
          }
        });
    } else {
      cy.get("#product-addtocart-button").click();
    }
  });
  it.skip("Add random item from Women category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#ui-id-4").click();
    cy.addItem();
  });
  it.skip("Add random item from Men category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#ui-id-5").click();
    cy.addItem();
  });
  it("Add random item from Gear category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#ui-id-6").click();
    let RandomToSelect = Math.floor(Math.random() * 4);
    cy.get(".product-items").find(".product-item").eq(RandomToSelect).click();
    cy.get(".stock > span")
    .invoke("text")
    .then((Text) => {
      if (Text == "In stock") {
        cy.get("#product-addtocart-button").click();
      } else {
        alert("sorry this item is not there");
      }
    });
    cy.get("#product-addtocart-button").click();
  });
});
