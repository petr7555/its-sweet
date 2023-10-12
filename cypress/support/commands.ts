declare namespace Cypress {
  interface Chainable<Subject> {
    getByTestId(selector: string, ...options: any): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add('getByTestId', (selector, ...options) => {
  return cy.get(`[data-cy=${selector}]`, ...options);
});
