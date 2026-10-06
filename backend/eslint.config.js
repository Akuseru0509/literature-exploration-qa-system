import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist", "coverage", "node_modules", "eslint.config.*"]
  },
  {
    languageOptions: {
      globals: {
      Buffer: "readonly",
      console: "readonly",
      module: "readonly",
      process: "readonly",
      require: "readonly",
      __dirname: "readonly"
    }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }]
    }
  }
);
