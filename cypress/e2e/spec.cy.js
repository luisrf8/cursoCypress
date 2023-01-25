
//  First good testing

// Using "expect" to wait a response

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

//  End First good testing

// Failing test 

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

// End failing test

// Visit Web Page

// Using "visit" to go to the Web Page

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// End Visit Web Page

// Filter page elements 

// Using "contains()" inside parentheses we write what we expect to be filtered

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
})

// End Filter page elements 