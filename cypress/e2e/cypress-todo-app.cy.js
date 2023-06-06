describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/todo')
  })

  instanceof('can add a todo item', () => {
    cy.get('input').type("Kill Akio")
    cy.
  })
})

