describe('Counter E2E tests', () => {
  it('should have initial state 10', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="result"]').should('have.text', '10');
  });

  it('should increment result +1 on button "+" click', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="result"]').should('have.text', '10');
    cy.get('[data-test="additionButton"]').dblclick();
    cy.get('[data-test="result"]').should('have.text', '12');
  });

  it('should decrement result -1 on button "-" click', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="result"]').should('have.text', '10');
    cy.get('[data-test="subtractionButton"]').click();
    cy.get('[data-test="result"]').should('have.text', '9');
  });

  it('should change initial state when number provided in input and button clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="input"]')
      .should('exist')
      .type('abc')
      .should('have.value', '');
    cy.get('[data-test="input"]').type(44).should('have.value', 44);
    cy.get('[data-test="form"]').submit();
    cy.get('[data-test="result"]').should('have.text', '44');
  });

  it('should change result to initial state after clicking Reset button', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="result"]').should('have.text', '10');
    cy.get('[data-test="additionButton"]').click();
    cy.get('[data-test="result"]').should('have.text', '11');
    cy.get('[data-test="resetButton"]').click();
    cy.get('[data-test="result"]').should('have.text', '10');
  });
});
