
describe("MultipleFile Upload Test", ()=>{
    beforeEach(() => {
  
        cy.visit('/') // visits the baseUrl
        cy.get(':nth-child(3) > :nth-child(6) > .btn').click()
        cy.wait(3000)
        })

     it.only("Multiple image Upload",()=>{

        
        cy.reload(true)

        let imagesNumberBeforeUpload;

        cy.xpath("//div[@class='image']").each(  function ($img, index, $images) {
        
        cy.wrap($img).within(() => {
        imagesNumberBeforeUpload= $images.length;
        cy.log("images number before multiple upload: "+imagesNumberBeforeUpload);
        
        })
        
    })
    

    cy.wait(3000)
    const path1="redtshirt.jpg";
    const path2="tshirtgreen.png";
    const path3="AvengersShirt.jpg";

    cy.xpath("//button[@class='btn btn-primary btn-sm ms-2']").attachFile(path1).attachFile(path2).attachFile(path3)
    cy.wait(3000)
    
    let imagesNumberAfterUpload;

    cy.xpath("//div[@class='image']").each(  function ($img, index, $images) {
        
        cy.wrap($img).within(() => {
        imagesNumberAfterUpload= $images.length;
        cy.log("images numbers after multiple upload: "+imagesNumberAfterUpload);
              
        })
       
    })
    
    if(imagesNumberAfterUpload>imagesNumberBeforeUpload){
        cy.log("Images Upload is successful")
    }else{
        cy.log("Images colud not be uploaded")
    }
})

})