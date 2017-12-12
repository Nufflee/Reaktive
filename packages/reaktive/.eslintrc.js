module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'jquery': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/jsx-uses-vars': [
      'warn'
    ],
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'windows'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'never'
    ],
    'no-unused-vars': [
      'warn'
    ],
    'no-mixed-spaces-and-tabs': [
      'warn'
    ],
    'no-console': [
      'off'
    ],
    'no-var': [
      'warn'
    ]
  }
}
