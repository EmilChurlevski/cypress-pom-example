import { PracticePage } from '../pages/practicePage';

describe('API response mocking examples', () => {
  const practicePage = new PracticePage();
  const iframe = () => practicePage.iframe();

  it('should show no courses in the iframe', () => {
    cy.intercept('/api/course', [])
      .as('interception');
    practicePage.visit();
    iframe().find(practicePage.iframeElements.coursesLinks)
      .should('not.exist');
    cy.get('@interception')
      .its('response.body')
      .should('be.empty');
  });

  it('should respond with actual price in dollar 0$', () => {
    cy.intercept('/api/course', req => {
      req.continue(res => {
        res.body.forEach((obj: any) => obj.actual_price_in_dollar = 0);
      });
    }).as('interception');
    practicePage.visit();
    cy.get('@interception')
      .its('response.body')
      .then(body => {
        body.forEach((obj: any) => {
          expect(obj.actual_price_in_dollar).to.eq(0);
        });
      });
  });
});