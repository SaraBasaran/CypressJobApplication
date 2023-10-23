


describe('List Visibility', () => {
    beforeEach(() => {
  
      cy.visit('/') // visits the baseUrl
    })
      //Verify that upload page is up and running
    it('URL and Title Test', () => {

         cy.url().should("include", "tester")
         cy.title().should("eq","ecommerce-photo-upload")
         cy.get("thead").should("contain", "Color")
         cy.get("thead").should("contain", "Fabric")

         

    })
  })
    //Verify that configurated product list is visible with specified text and button
    it.only('List Visibility Test', () => {

     //Verify that item Id is displayed
      cy.get('thead > tr > :nth-child(1)').should("have.text", "Item Id")

     //Verify that item ids are unique**********************
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

 it('List Visibility Test', () => {

     //Verify that item Id is displayed
      cy.get('thead > tr > :nth-child(1)').should("have.text", "Product Id")

     //Verify that item ids are unique**********************
     //Verify that item name is displayed
      cy.get('thead > tr > :nth-child(1)').should("have.text", "Product Name")

      //Verify that No Colors column is displayed
      cy.get('thead > tr > :nth-child(3)').should("have.text", "Color Count")

      //Verify that No Fabrics column is displayed
      cy.get('thead > tr > :nth-child(3)').should("have.text", "Fabric Count")
      
      //Verify that No Images column is displayed
      cy.get('thead > tr > :nth-child(3)').should("have.text", "Image Count")

     cy.screenshot()
      

 })


    it('Edit images Button Test', () => {

      cy.visit('/') // visits the baseUrl
      cy.wait(2000)

      cy.get(":nth-child(1) > :nth-child(6) > .btn").should("have.text", "Edit images")
      cy.get(':nth-child(1) > :nth-child(6) > .btn').click()
      cy.wait(2000)

      //Verify that the user is able to navigate to Upload Page
      cy.url().should("include", "product-detail")  
        
      cy.screenshot()
})


