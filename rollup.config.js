import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  input: "src/components/LazyComponent.svelte", // Make sure this points to the correct entry file
  output: [
    {
      file: "dist/index.js",
      format: "es", // ES module format
      sourcemap: true,
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs", // CommonJS format for Node.js
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
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: ["svelte"], // Exclude Svelte from the bundle
};
