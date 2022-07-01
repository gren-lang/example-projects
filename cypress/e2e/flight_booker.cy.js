describe('Flight Booker', () => {
  beforeEach(() => {
    cy.visit('flight_booker/Example.html');
  });

  it('Initially, one-way is selected, and departure date box is disabled', () => {
    cy.get('select#flight-type').should('have.value', 'One-way flight');
    cy.get('input#departure').should('not.be.disabled');
    cy.get('input#arrival').should('be.disabled');
    cy.get('button#book').should('not.be.disabled');
  });

  it('Setting flight type to "return flight" enables arrival date box', () => {
    cy.get('select#flight-type').select('Return flight');
    cy.get('input#departure').should('not.be.disabled');
    cy.get('input#arrival').should('not.be.disabled');
    cy.get('button#book').should('not.be.disabled');
  });
  
  it('Setting arrival to before departure disabled "book" button', () => {
    cy.get('select#flight-type').select('Return flight');
    cy.get('input#departure').clear().type('22.06.2022');
    cy.get('input#arrival').clear().type('21.06.2022');
    cy.get('button#book').should('be.disabled');
  });

  it('Setting departure to invalid date makes it red', () => {
    cy.get('select#flight-type').select('Return flight');
    
    cy.get('input#departure')
      .clear().type('not a date')
      .should('have.attr', 'style', 'background-color: red;');
  });
  
  it('Setting arrival to invalid date makes it red', () => {
    cy.get('select#flight-type').select('Return flight');
    
    cy.get('input#arrival')
      .clear().type('not a date')
      .should('have.attr', 'style', 'background-color: red;');
  });
  
  it('Switching back to one-way flight disables departure again', () => {
    cy.get('select#flight-type').select('Return flight');
    cy.get('select#flight-type').select('One-way flight');
    
    cy.get('input#departure').should('not.be.disabled');
    cy.get('input#arrival').should('be.disabled');
    cy.get('button#book').should('not.be.disabled');
  });
});
