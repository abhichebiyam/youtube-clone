import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend the Next.js and TypeScript ESLint configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rule overrides
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply these rules only to TypeScript files
    rules: {
      // Disable or relax the `@typescript-eslint/no-explicit-any` rule
      "@typescript-eslint/no-explicit-any": "off", // Disable the rule
      // "@typescript-eslint/no-explicit-any": "warn", // Or show warnings instead of errors
    },
  },
];

export default eslintConfig;