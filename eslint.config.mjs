import js from "@eslint/js";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest"

export default [
  js.configs.recommended,  
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: { jest: jestPlugin },
  },
];
