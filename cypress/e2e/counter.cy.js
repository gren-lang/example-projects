describe('Counter', () => {
  beforeEach(() => {
    cy.visit('counter/Example.html');
  });

  it('Initial count is 0', () => {
    cy.get('#count').should('have.text', '0');
  });

  it('Count is increased by pressing button', () => {
    cy.get('button#increase-count').click()
    cy.get('#count').should('have.text', '1');
  });
});
