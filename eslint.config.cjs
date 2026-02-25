// const js = require("@eslint/js");
// const globals = require("globals");

// module.exports = [
//   js.configs.recommended,
//   {
//     files: ["**/*.js"],
//     languageOptions: {
//       ecmaVersion: 2022,
//       sourceType: "commonjs",
//       globals: {
//         ...globals.node,
//         ...globals.browser
//       }
//     },
//     rules: {
//       "no-unused-vars": "warn",
//       "no-console": "off",
//       "semi": ["error", "always"],
//       "quotes": ["error", "double"],
//       "indent": ["error", 2]
//     }
//   }
// ];

// eslint.config.cjs

const js = require('@eslint/js');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'prettier/prettier': 'error',
    },
  },

  prettierConfig,
];
