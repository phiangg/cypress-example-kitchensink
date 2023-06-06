describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/todo')
  })

  it('can add a todo item', () => {
  cy.get('[data-test="new-todo"]').type('Kill Akio {enter}')
  cy.get('.todo-list li').eq(2).should('have.text', 'Kill Akio')
  })

  it.only('can check "Walk the dog"', () => {
  cy.get('li').contains('Walk the dog').find('input[type="checkbox"]').check()
  cy.get('li').contains('Walk the dog').find('input[type="checkbox"]').should('be.checked')
  })


})

