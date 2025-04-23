const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://naveenautomationlabs.com/opencart/index.php?route=account/login",// 🔥 Set your base URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
    //loginURL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
  }
});
