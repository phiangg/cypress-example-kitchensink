describe('Kitchen Sink', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/todo')
  })

  it('can add a todo item', () => {
    cy.get('[data-test="new-todo"]').type('Kill Akio {enter}')
    cy.get('.todo-list li').eq(2).should('have.text', 'Kill Akio')
  })

  it('can check "Walk the dog"', () => {
    cy.contains('.todo-list li', 'Walk the dog')
      .find('.toggle')
      .check()
      .should('be.checked');
  });
  
  it('asserts that there are 3 items', () => {
    cy.get('[data-test="new-todo"]').type('Kill Akio {enter}')
    cy.get('.todo-list li').should('have.length', 3)
  })

  it('can clear completed', () => {
    cy.contains('.todo-list li', 'Walk the dog')
    .find('input[type="checkbox"]')
    .check()
    .should('be.checked');

    cy.contains('button', 'Clear completed').click();

    cy.contains('.todo-list li', 'Walk the dog').should('not.exist');
  });
  
  it('can check all', () => {
    cy.get('label[for="toggle-all"]').click()
    cy.get('input[type="checkbox"]').should('be.checked')
  })

  it('can edit a todo item', () => {
    cy.get('.todo-list li').eq(0).dblclick()
    cy.get('.todo-list li').eq(0).find('.edit').clear().type('Kill Akio{enter}')
    cy.get('.todo-list li').eq(0).should('have.text', 'Kill Akio')
  })

})

describe('Submit a Coupon Code', ()=> {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/actions')
  })

  it('can submit a coupon code', () => {
  cy.get('.action-form')
  .find('[type="text"]').type('HALFOFF')
  cy.get('.action-form').submit()
  .next().should('contain', 'Your form has been submitted!')

  })

})

describe('Table is Clickable', ()=> {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/misc')
  })

  it('the link is correct', () => {
    cy.url().should('eq', 'http://localhost:8080/commands/misc');
  });
  
  it('table is clickable', () => {
  cy.get('.misc-table').within(() => {
  // ends the current chain and yields null
  cy.contains('Cheryl').click().end()
  // queries the entire table again
  cy.contains('Charles').click()
  })

})

})
