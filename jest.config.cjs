module.exports = {
    testEnvironment: 'jsdom', // Simule un environnement de navigateur
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Si tu utilises Babel pour la transpilation
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Pour configurer Testing Library
    moduleNameMapper: {
      '\\.(css|scss)$': 'jest-css-modules',
    },
  };