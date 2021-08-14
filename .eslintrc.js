const path = require('path');

module.exports = {
  extends: ['eslint:recommended', 'airbnb'],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'aliasResolver.config.js'),
      },
    },
  },
  parser: '@babel/eslint-parser',
  rules: {
    'no-underscore-dangle': 'off',
    'lines-between-class-members': 'off',
    'semi-spacing': 'error',
    'no-unused-vars': ['error', {
      argsIgnorePattern: 'next|err|ref',
    }],
    'max-len': ['error', {
      code: 160,
    }],
    'linebreak-style': 0,
    'no-alert': 0,
    'no-console': ['warn',
      {
        allow: [
          'info',
          'error',
          'warn',
        ],
      }],
    'no-restricted-globals': 0,
    'arrow-body-style': 0,
    'array-element-newline': [2,
      {
        ArrayExpression: 'consistent',
        ArrayPattern: {
          minItems: 3,
        },
      }],
    'array-bracket-newline': ['error', 'consistent'],
    'object-curly-newline': [2],

    'react/destructuring-assignment': [0, 'always'],
    'react/no-access-state-in-setstate': 0,
    'react/button-has-type': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/require-default-props': 0,
    'react/prop-types': [1,
      {
        ignore: [
          'location',
          'history',
          'form',
        ],
      }],
    'react/jsx-props-no-multi-spaces': 0,
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': [0],
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/accessible-emoji': 'off',
    'import/prefer-default-export': 'off',
  },
};