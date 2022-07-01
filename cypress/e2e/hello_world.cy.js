describe('Hello world', () => {
  it('Renders a "Hello, world" string', () => {
    cy.visit('hello_world/Example.html');
    
    cy.get('body div').should('have.text', 'Hello, world!'); 
  });
});
