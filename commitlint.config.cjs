// commitlint.config.cjs

module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Subject line max length
    'header-max-length': [2, 'always', 72],

    // Must use imperative mood (best GitHub practice)
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],

    // No period at end of subject
    'subject-full-stop': [2, 'never', '.'],

    // Type must be lowercase
    'type-case': [2, 'always', 'lower-case'],

    // Type cannot be empty
    'type-empty': [2, 'never'],

    // Subject cannot be empty
    'subject-empty': [2, 'never'],
  },
};
