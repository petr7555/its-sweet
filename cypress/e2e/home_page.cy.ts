describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays heading text', () => {
    cy.get('h1').should('have.text', 'It\'s pronounced "sweet"')
  })

  it('displays two word cards', () => {
    cy.get('[data-cy="word-card"]').should('have.length', 2)

    cy.get('[data-cy="word-card"]').first().should('contain.text', 'suite')
    cy.get('[data-cy="word-card"]').last().should('contain.text', 'sweet')
  })
})
