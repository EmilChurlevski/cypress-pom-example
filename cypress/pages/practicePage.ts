export class PracticePage {
  elements = {
    alertButton: () => cy.get('input#alertbtn'),
    confirmButton: () => cy.get('input#confirmbtn'),
    countryInput: () => cy.get('input[type="text"]').first(),
    checkboxes: () => cy.get('label input[type="checkbox"]'),
    dropdownTrigger: () => cy.get('select#dropdown-class-example'),
    hideButton: () => cy.get('input#hide-textbox'),
    homeButton: () => cy.contains('div button', 'Home'),
    iframe: () => cy.get('iframe#courses-iframe'),
    loginButton: () => cy.contains('div button', 'Login'),
    mouseOverButton: () => cy.contains('div button', 'Mouse Hover'),
    mouseOverContent: () => cy.get('div.mouse-hover-content'),
    mouseOverReload: () => cy.get('div.mouse-hover-content a').last(),
    mouseOverTop: () => cy.get('div.mouse-hover-content a').first(),
    nameInput: () => cy.get('input[type="text"]').eq(1),
    openTabButton: () => cy.contains('div a', 'Open Tab'),
    openWindowButton: () => cy.contains('div button', 'Open Window'),
    pageLegends: () => cy.get('div legend'),
    practiceButton: () => cy.contains('div button', 'Practice'),
    radioButtons: () => cy.get('label input[type="radio"]'),
    showButton: () => cy.get('input#show-textbox'),
    showHideInput: () => cy.get('input[type="text"]').last(),
    signUpButton: () => cy.contains('div button', 'Signup')
  };

  iframeCourseLinks: string[] = [
    'https://courses.rahulshettyacademy.com/p/get-access-to-all-courses',
    'https://courses.rahulshettyacademy.com/p/cypress-modern-automation-testing-from-scratch-framework',
    'https://courses.rahulshettyacademy.com/p/core-java-for-automation-testers-interview-programs',
    'https://courses.rahulshettyacademy.com/p/javascript-sdet-automation-testing',
    'https://courses.rahulshettyacademy.com/p/learn-postman-for-api-automation-testing-with-javascript',
    'https://courses.rahulshettyacademy.com/p/software-quality-assurance-engineer',
    'https://courses.rahulshettyacademy.com/p/test-architect-devops-for-qa-package',
    'https://courses.rahulshettyacademy.com/p/selenium-design-patterns-best-practices-for-framework-design',
    'https://courses.rahulshettyacademy.com/p/spring-boot-fundamentals-with-unit-testing-mockmvc-mockito',
    'https://courses.rahulshettyacademy.com/p/rest-api-testing-automation-from-scratch-rest-assured-java',
    'https://courses.rahulshettyacademy.com/p/python-sdet-automation-testing',
    'https://courses.rahulshettyacademy.com/p/azure-devops-fundamentals-for-testers-ci-cd-project-boards'
  ];

  iframeElements = {
    allCourses: '.courses-section .inner-box',
    amountInDollar: '.courses-section .inner-box .amountInDollar',
    coursesLinks: '.courses-section h2 a',
    coursesSection: 'section.courses-section'
  };

  legends = {
    radioExample: 'Radio Button Example',
    suggestionExample: 'Suggession Class Example',
    dropdownExample: 'Dropdown Example',
    checkboxExample: 'Checkbox Example',
    switchWindowExample: 'Switch Window Example',
    switchTabExample: 'Switch Tab Example',
    switchToAlertExample: 'Switch To Alert Example',
    webTableExample: 'Web Table Example',
    elementDisplayedExample: 'Element Displayed Example',
    webTableFixedHeader: 'Web Table Fixed header',
    mouseHoverExample: 'Mouse Hover Example',
    iframeExample: 'iFrame Example'
  };

  /**
   * Checks if the header buttons have correct css
   * Optionally if the links have correct href attribute values
   */
  checkHeaderButtons(): void {
    const buttons = [
      this.elements.homeButton(),
      this.elements.loginButton(),
      this.elements.practiceButton(),
      this.elements.signUpButton()
    ];
    // const links = ['link1', 'link2', 'link3', 'link4']
    buttons.forEach((button, i) => {
      button.then($btn => {
        expect($btn).to.have.class('btn-primary');
        expect($btn).to.have.css('color', 'rgb(255, 255, 255)');
        expect($btn).to.have.css('background-color', 'rgb(0, 123, 255)');
        expect($btn).to.have.css('border-color', 'rgb(0, 123, 255)');
        // if the buttons included links that can also be checked inside this loop
        //expect($btn).to.have.attr('href', links[i]);
      });
    });
  }

  /**
   * Checks if the legend texts match the desired text
   */
  checkLegends(): void {
    const texts: string[] = Object.values(this.legends);
    texts.forEach((text: string, i: number) => {
      this.elements.pageLegends().eq(i).should('contain', text);
    });
  }

  /**
   * It returns the body of the iframe
   * Example how to use:
   *        const iframe = () => practicePage.iframe();
   *        iframe().find(selector: string)...
   */
  iframe() {
    return this.elements.iframe()
      .its('0.contentDocument')
      .its('body')
      .then(cy.wrap);
  }

  /**
   * It selects the desired options
   * @param i which radio button, dropdown option and checkbox option to select
   */
  selectOptions(i: number): void {
    this.elements.radioButtons().eq(i).click()
      .should('be.checked');
    this.elements.checkboxes().eq(i).click()
      .should('be.checked');
    this.elements.dropdownTrigger().select('Option' + ( i + 1 ))
      .should('have.value', 'option' + ( i + 1 ));
  }

  visit(): void {
    cy.visit('/AutomationPractice/');
  }


}