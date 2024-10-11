import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  input: "src/index.ts", // Change to the central entry point
  output: [
    {
      file: "dist/index.js",
      format: "es",
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
      emitCss: false,
      compilerOptions: {
        dev: !process.env.PRODUCTION,
      },
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
      exclude: ["node_modules"],
    }),
  ],
  external: ["svelte", "svelte/internal"], // Ensure svelte and its internals are excluded
};
