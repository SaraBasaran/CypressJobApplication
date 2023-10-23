/*
1- User should be able to visit the landing page
AC01-Test Cases
Verify that upload page is up and running
Verify that configurated product list is visible
Verify that item Id is displayed
Verify that item name is displayed
Verify that No Colors column is displayed
Verify that No Fabrics column is displayed
Verify that No Images column is displayed*/


describe('US01-TC01', () => {
    beforeEach(() => {
  
      cy.visit('/') // visits the baseUrl
    })
  
    it('URL and Title Test', () => {

         cy.url().should("include", "tester")
         cy.title().should("eq","ecommerce-photo-upload")
         cy.get("thead").should("contain", "No Color")
         cy.get("thead").should("contain", "No Fabric")
         cy.get("thead").should("contain", "No Images")
         cy.screenshot()

    })

    it.only('List Visibility Test', () => {

      //Verify that item Id is displayed
       cy.get('thead > tr > :nth-child(1)').should("have.text", "Item Id")
 
      //Verify that item name is displayed
       cy.get('thead > tr > :nth-child(1)').should("have.text", "Item Name")
 
       //Verify that No Colors column is displayed
       cy.get('thead > tr > :nth-child(3)').should("have.text", "No Colors")
 
       //Verify that No Fabrics column is displayed
       cy.get('thead > tr > :nth-child(3)').should("have.text", "No Fabrics")
       
       //Verify that No Images column is displayed
       cy.get('thead > tr > :nth-child(3)').should("have.text", "No Images")
 
 
       cy.screenshot()
 
  })
})