module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules:  {
    "@typescript-eslint/indent": ["error", 2],
    "prettier/prettier": "error",
  },
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  env: {
    amd: true,
    node: true,
    jest: true,
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};