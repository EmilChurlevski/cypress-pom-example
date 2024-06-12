# Cypress example project

## Table of contents 

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [UI Assertions](#ui-assertions)
- [API Mocking](#api-mocking)
- [Page Object Model](#page-object-model)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up this Cypress project, follow these steps:
1. Clone the repository:
    ```sh
    git clone https://github.com/EmilChurlevski/cypress-pom-example
    cd project-root
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```

## Project Structure

The project structure is organized as follows:cypress-project

````
cypress-project/
├── cypress/
│ ├── e2e/
│ │ ├── exampleTest.cy.ts
│ ├── fixtures/
│ ├──  pages/
│ │ ├── practicePage.ts
│ ├── plugins/
│ ├── support/
│ │ ├── commands.ts
│ │ ├── e2e.ts
│ └ tsconfig.json
├── cypress.config.json
├── package.json
├── README.md
└── tsconfig.json
````

## Running Tests

To run the tests, use the following command:

```sh
npx cypress open
```
This will open the Cypress Test Runner, allowing you to run individual test files.

## UI Assertions

Cypress provides powerful UI assertion capabilities. Below is an example of a UI assertion test:

```
describe('UI Assertions', () => {
    it('should display the correct title', () => {
        cy.visit('https://example.com');
        cy.title().should('include', 'Example Domain');
    });
)};
```

## API Mocking

Cypress allows you to mock API responses to test different scenarios. Here's an example:

````
describe('API Mocking', () => {
    it('should mock the API response', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/data',
            response: { name: 'Cypress' }
        }).as('getData');

        cy.visit('https://example.com');
        cy.wait('@getData').its('response.body').should('have.property', 'name', 'Cypress');
    });
});
````

## Page Object Model

Using the Page Object Model (POM) design pattern helps to maintain and organize test code. Below is an example of using POM in Cypress:

```
export class PracticePage {
 elements = {
    someElement : () => cy.get('some-selector')
 }
 
 visit(): void {
 cy.visit('/');
 }
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or code fixes.

## License

This project is licensed under the MIT License.