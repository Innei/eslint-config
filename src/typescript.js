import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX } from './shared.js'

/** @type {import('eslint-define-config').FlatESLintConfig[]} */
export const typescript = [
  {
    files: [GLOB_TS, GLOB_TSX],
    ignores: GLOB_EXCLUDE,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsPlugin.configs['recommended'].rules,

      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-redeclare': 'error',

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'separate-type-imports', disallowTypeAnnotations: false },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-as-const': 'warn',
    },
  },
  {
    files: ['**/*.d.ts'],
    ignores: GLOB_EXCLUDE,
    rules: {
      'import/no-duplicates': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.ts?(x)'],
    ignores: GLOB_EXCLUDE,
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    ignores: GLOB_EXCLUDE,
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
]
