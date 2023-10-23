/*
Verify that the grid is listing the total number of associated colors properly
Verify that the grid is listing the total number of associated fabrics properly
Verify that the grid is listing the total number of associated images properly

*/


describe('US01-AC03', () => {
    beforeEach(() => {
  
    cy.visit('/') // visits the baseUrl
    })
    var colorColumnNumber;   
    let fabricColumnNumber;
    let imageNumber;

    it('Edit Button Navigation Test on Upload Page', () => {

    cy.get(':nth-child(3) > :nth-child(6) > .btn').click()
    cy.wait(3000)
    cy.url().should("include", "product-detail")
    //cy.contains("Item Id", {matchCase: false})
    //cy.contains("Item Name", {matchCase: false})
    })

    it("Associated Color, Fabric and Image Number Data Test", ()=> {
      
      cy.get('tbody > :nth-child(1) > :nth-child(6)').click()

      cy.get("thead>tr").each(  function ($colorRow, index, $rows) {
        
        cy.wrap($colorRow).within(() => {
        cy.wait(3000);

        cy.get("th[scope='col']").each(($color, index, $colorColumns) => {
        cy.wait(3000);
        cy.log($color.text());
        cy.log($colorColumns.length);

        colorColumnNumber = $colorColumns.length;
        cy.wait(1000);
        cy.log("color column number: "+colorColumnNumber);

          });
        });
      })
      cy.get('tbody > tr > th').each( ($fabric, index, $fabricColumns)=>{
      cy.wait(1000);
      cy.log($fabric.text());

      fabricColumnNumber=$fabricColumns.length;
      cy.log("fabric column number: "+ fabricColumnNumber);
      cy.wait(3000)

      it("Image count", () => {
        cy.xpath("//div[@class='image']")
        .find('>dd:contains("image")')
        .then(($value) => {
            imageNumber = $value.length

        })


      cy.log(imageNumber);
      });
      it('confirms the headings (plain cy)', () => {
        
        cy.go("back")
        cy.reload(true)
        cy.wait(3000)
        const headings = ['Color Count', 'Fabric Count', 'Image Count']
        cy.get('table thead td').then(($td) => {
        const texts = Cypress._.map($td, 'innerText')
        expect(texts, 'headings').to.deep.equal(headings)
        })
      })
    
      it('confirms the entire table with retries', () => {
         
        cy.get('table').should('deep.equal', 
        [['Color Count', 'Fabric Count', 'Image Count'],
        [colorColumnNumber-1, fabricColumnNumber , imageNumber]])
        })
    
      
      })
   

                           
          
})             
})

