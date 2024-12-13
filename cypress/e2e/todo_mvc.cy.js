describe('Todo MVC', () => {
  beforeEach(() => {
    cy.visit('todo_mvc/Example.html');
  });

  it('Initial state', () => {
    cy.get('input.new-todo').should('have.text', '');
    cy.get('ul.todo-list').children().should('have.length', 0);
  });

  it('Adding a todo populates the todo-list', () => {
    cy.get('input.new-todo').type('some task{enter}');
    cy.get('ul.todo-list').children().should('have.length', 1);
    cy.get('ul.todo-list li:first').should('have.text', 'some task');
  });

  it('Adding two todos and marking one of them as completed', () => {
    cy.get('input.new-todo').type('first task{enter}');
    cy.get('input.new-todo').type('second task{enter}');
    
    cy.get('ul.todo-list').children().should('have.length', 2);
    
    cy.get('ul.todo-list li:first').should('have.text', 'first task');
    cy.get('ul.todo-list li:nth-child(2)').should('have.text', 'second task');

    cy.get('ul.todo-list li:nth-child(2) input.toggle').click();
    
    cy.get('ul.todo-list li:first').should('not.have.class', 'completed');
    cy.get('ul.todo-list li:nth-child(2)').should('have.class', 'completed');
  });
});
