// @ts-nocheck
const airbnbConfig = require('eslint-config-airbnb');
const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');
const pluginJs = require('@eslint/js');
const globals = require('globals');

console.log(airbnbConfig);
console.log(prettierConfig);

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    ...airbnbConfig,
  },
  {
    ...prettierConfig,
  },
  {
    ...pluginJs.configs.recommended,
  },
];
