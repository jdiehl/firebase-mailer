module.exports = {
  'env': {
    'browser': false,
    'commonjs': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'arrow-parens': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'no-unreachable': ['warn'],
    'no-unused-vars': ['warn', { args: 'none' }],
    'require-await': 0,
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'camelcase': 0,
    'curly': ['error', 'multi-line'],
    'semi': ['error', 'never'],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-non-null-assertion': 0
  }
}
