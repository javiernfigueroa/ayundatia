import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Asegura que todas las variables declaradas sean utilizadas. Esto ayuda a mantener el código limpio.
      'no-unused-vars': 'error',

      // Obliga a usar comillas simples (`'`) en lugar de dobles (`"`) para strings en el código JavaScript.
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],

      // Obliga a usar comillas simples en las propiedades JSX como `className` o `id`.
      'jsx-quotes': ['error', 'prefer-single'],

      // Prohíbe el uso de punto y coma (`;`) al final de las líneas.
      'semi': ['error', 'never'],

      // Obliga a usar funciones flecha en callbacks o funciones anónimas.
      'prefer-arrow-callback': 'error',

      // Obliga a declarar todas las funciones como expresiones (por ejemplo, `const App = () => {}`) en lugar de funciones declaradas (`function App() {}`).
      'func-style': ['error', 'expression'],

      // Obliga a tener un espacio antes y después de la flecha (`=>`) en funciones flecha para mejorar la legibilidad.
      'arrow-spacing': ['error', { before: true, after: true }],
    },
  },
]
