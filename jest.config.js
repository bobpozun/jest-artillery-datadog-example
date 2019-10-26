// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // globalSetup: './etc/jest.global-setup.js',
  // globalTeardown: './jest.global-teardown.js',
  setupFilesAfterEnv: ["./jest.setup.js"],
  // globals: {},
  testEnvironment: "node",
  transform: {"^.+\\.[t|j]sx?$": "babel-jest"},
  transformIgnorePatterns: ["/node_modules/(?!test-component).+\\.js$"],
  testResultsProcessor: "jest-teamcity-reporter"
};
