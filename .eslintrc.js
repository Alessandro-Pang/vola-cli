/*
 * @Author: zi.yang
 * @Date: 2022-09-01 07:43:51
 * @LastEditors: zi.yang
 * @LastEditTime: 2022-09-21 12:57:40
 * @Description:
 * @FilePath: /vola-cli/.eslintrc.js
 */

const lintRules = {
  'no-alert': 'off',
  'no-console': 'off',
  'no-debugger': 'off',
  'global-requires': 'off',
};

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:import/recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  // overrides typescript
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:import/recommended',
        'plugin:import/typescript',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
      },
      rules: { ...lintRules },
    },
  ],
  rules: { ...lintRules },
};
