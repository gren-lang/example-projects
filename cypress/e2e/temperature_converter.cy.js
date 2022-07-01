describe('Temperature Converter', () => {
  beforeEach(() => {
    cy.visit('temperature_converter/Example.html');
  });

  it('Initially, both fields are blank', () => {
    cy.get('input#celsius').should('have.value', '');
    cy.get('input#fahrenheit').should('have.value', '');
  });

  it('Entering value in celsius input, converts the value and enters it into fahrenheit', () => {
    cy.get('input#celsius').type('20');
    cy.get('input#fahrenheit').should('have.value', '68');
  });

  it('Entering value in celsius input, converts the value and enters it into fahrenheit', () => {
    cy.get('input#fahrenheit').type('41');
    cy.get('input#celsius').should('have.value', '5');
  });
});
