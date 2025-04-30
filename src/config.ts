import Runner from "./runner.ts";

export const PAGE_VARIATIONS = [10, 100, 1000, 10000];
export const ITERATIONS = 10;

export const RUNNERS: Set<Runner> = new Set([
  new Runner({
    name: "lume",
    build: ["deno", "task", "build"],
    content: "pages",
    output: "_site",
  }),
  new Runner({
    name: "eleventy",
    build: ["node", "./node_modules/.bin/eleventy"],
    content: "pages",
    output: "_site",
  }),

  new Runner({
    name: "jekyll",
    build: ["bundle", "exec", "jekyll", "build"],
    content: "_pages",
    output: "_site",
  }),

  new Runner({
    name: "hugo",
    build: ["hugo", "-D"],
    content: "content/pages",
    output: "public",
  }),
]);
