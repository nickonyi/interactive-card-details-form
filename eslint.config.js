const { FlatCompat } = require('@eslint/eslintrc');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends(
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ),

  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...require('globals').browser,
        ...require('globals').node,
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
    },
  },
];
