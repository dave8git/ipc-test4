/// <reference types="vitest" />
const { defineConfig } = require('vitest/config');

module.exports = defineConfig({
  test: {
    globals: true,
    environment: 'node', // Electron main process
    include: ['tests/**/*.test.js'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
    },
  },
});
