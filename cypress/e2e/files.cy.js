describe('Files', () => {
  beforeEach(() => {
    cy.visit('files/Example.html'); });

  it('Initial state', () => {
    cy.get('#file-view').should('have.text', '[]');
  });

  it('After file upload, file-view contains file name', () => {
    cy.get('input[type=file]').selectFile('files/gren.json');
    cy.get('#file-view').should('have.text', '[<gren.json>]');
  });
});
