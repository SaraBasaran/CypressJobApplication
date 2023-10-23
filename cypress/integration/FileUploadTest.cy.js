/*
Verify that user is navigated to Upload Page after clicking “Edit Image”
Verify that "Item ID" is displayed
Verify that "Item Name" is displayed
Verify that the list associated with the configured product is displayed
Verify that the grid of product configuration is displayed with color column the header part of the list
Verify that the grid of product configuration is displayed with fabric column under the first column
Verify that under each column "Add" button is displayed corresponding to each item for fabric and color product configuration

*/

describe("File Upload Test", ()=>{
    beforeEach(() => {
  
        cy.visit('/') // visits the baseUrl
        cy.get(':nth-child(3) > :nth-child(6) > .btn').click()
        cy.wait(3000)
        cy.url().should("include", "product-detail")
        })

it("Single File Upload",()=>{


    

    let imageNumberBeforeUpload;
    let imageNumberAfterUpload;
  

    cy.wait(3000)
    cy.xpath("//div[@class='image']").each(  function ($img, index, $images) {
      
        cy.wrap($img).within(() => {
        imageNumberBeforeUpload = $images.length;
        cy.wait(1000);
        cy.log("image number before upload: "+ imageNumberBeforeUpload);   
        
        })

    }) 
    
    
    cy.wait(4000)
    
    const path1="AvengersShirt.jpg";

    cy.get('.btn').attachFile(path1)

    cy.wait(3000)
    cy.reload(true)
    cy.wait(3000)
    cy.xpath("//div[@class='image']").each(  function ($img, index, $images) {
        
        cy.wrap($img).within(() => {
            
        imageNumberAfterUpload= $images.length;

        cy.wait(1000);
        cy.log("image number after upload: "+imageNumberAfterUpload);
        
        })

    })
    
   
    
    if(imageNumberAfterUpload>imageNumberBeforeUpload){
        cy.log("Image Upload is successful")
    }else{
        cy.log("Image could not be uploaded in automation")
    }
    
    cy.screenshot();
})
     
})


