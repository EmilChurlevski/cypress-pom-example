import { PracticePage } from '../pages/practicePage';

describe('Cypress UI Testing Examples', () => {

  const practicePage = new PracticePage();

  beforeEach('Visit', () => {
    practicePage.visit();
  });

  it('tests the header buttons', () => {
    practicePage.checkHeaderButtons();
  });

  it('should successfully select the desired options', () => {
    practicePage.selectOptions(1);
  });

  it('checks the legend texts', () => {
    practicePage.checkLegends();
  });

  it('tests the suggestions input', () => {
    practicePage.elements.countryInput().type('ger');
    cy.contains('Germany').click();
    practicePage.elements.countryInput().should('have.value', 'Germany');
  });

  it('checks the redirection of a button', () => {
    const redirectUrl: string = 'http://www.qaclickacademy.com/';
    cy.window()
      .then(win => {
        cy.stub(win, 'open').as('open');
      });
    practicePage.elements.openWindowButton().click();
    cy.get('@open')
      .should('have.been.calledOnceWith', redirectUrl);
    practicePage.elements.openTabButton().click();
    cy.get('@open')
      .should('have.been.calledOnceWith', redirectUrl);
  });

  it('tests the alert and confirm pop up', () => {
    const name: string = 'Test';
    const alertTxt: string = `Hello ${name}, share this practice page and share your knowledge`;
    const confirmTxt: string = `Hello ${name}, Are you sure you want to confirm?`;
    practicePage.elements.nameInput().type(name, { delay: 0 });
    practicePage.elements.alertButton().click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq(alertTxt);
    });
    practicePage.elements.nameInput().type(name, { delay: 0 });
    practicePage.elements.confirmButton().click();
    cy.on('window:confirm', (text) => {
      expect(text).to.eq(confirmTxt);
    });
  });

  it('checks if element is visible or not', () => {
    practicePage.elements.showHideInput().should('be.visible');
    practicePage.elements.hideButton().click();
    practicePage.elements.showHideInput().should('not.be.visible');
    practicePage.elements.showButton().click();
    practicePage.elements.showHideInput().should('be.visible');
  });

  it('tests elements shown on mouse hover', () => {
    practicePage.elements.mouseOverContent()
      .invoke('show')
      .find('a')
      .first()
      .click();
    practicePage.elements.mouseOverContent()
      .invoke('show')
      .find('a')
      .last()
      .click();
  });

  it('tests the iframe', () => {
    const iframe = () => practicePage.iframe();
    iframe().find(practicePage.iframeElements.coursesSection)
      .should('be.visible');
    iframe().find(practicePage.iframeElements.allCourses)
      .should('have.length', 12);
    practicePage.iframeCourseLinks.forEach((link, i) => {
      iframe().find(practicePage.iframeElements.coursesLinks)
        .eq(i)
        .should('have.attr', 'href', link);
    });
  });
});
