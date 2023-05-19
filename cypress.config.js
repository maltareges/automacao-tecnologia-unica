const { defineConfig } = require('cypress')


module.exports = defineConfig({ 
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config),
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: 'https://www.amazon.com.br',    
  },
  fixturesFolder: false,
  video: false,
  chromeWebSecurity: false,
  screenshots: false
})
