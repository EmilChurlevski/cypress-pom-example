import { defineConfig } from "cypress";

module.exports = defineConfig({
  env: {
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com',
    setupNodeEvents(on, config) {
    },
  },
});


