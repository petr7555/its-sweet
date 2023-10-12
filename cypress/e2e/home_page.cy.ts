import terminalLog from "../support/terminalLog";

describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays heading text', () => {
    cy.get('h1').should('have.text', 'It\'s pronounced "sweet"')
  })

  it('displays two word cards', () => {
    cy.getByTestId('word-card').should('have.length', 2)

    cy.getByTestId('word-card').first().should('contain.text', 'suite')
    cy.getByTestId('word-card').last().should('contain.text', 'sweet')
  })

  it('has no detectable a11y violations on load', () => {
    cy.injectAxe()
    cy.checkA11y(undefined, undefined, terminalLog)
  })
})
