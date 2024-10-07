import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  input: "./index.ts", // Ensure this points to your main entry file
  output: [
    {
      file: "dist/index.js",
      format: "es", // Use 'es' format
      sourcemap: true,
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !process.env.PRODUCTION,
      },
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"], // Avoid duplicating Svelte
    }),
    commonjs(),
    typescript({
      sourceMap: true,
      tsconfig: "./tsconfig.json", // Ensure this points to your tsconfig file
    }),
  ],
  external: ["svelte"], // Exclude Svelte from the bundle
};
