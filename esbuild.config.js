import { build } from "esbuild";

const config = {
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  sourcemap: true,
};

Promise.all([
  build({
    ...config,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),

  build({
    ...config,
    format: "esm",
  }),
]).catch(() => {
  console.log("esbuild run failed");
  process.exit(1);
});
