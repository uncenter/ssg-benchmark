import { join } from "https://deno.land/std@0.98.0/path/mod.ts";
import generate from "./generator.ts";
import spawn from "nano-spawn";

type Generator = {
  name: string;
  build: string;
  content: string;
  output: string;
};

const GENERATORS: Array<Generator> = [
  {
    name: "lume",
    build: "deno task build",
    content: "pages",
    output: "_site",
  },
  {
    name: "eleventy",
    build: "node ./node_modules/.bin/eleventy",
    content: "pages",
    output: "_site",
  },
  {
    name: "jekyll",
    build: "bundle exec jekyll build",
    content: "_pages",
    output: "_site",
  },
  {
    name: "hugo",
    build: "hugo -D",
    content: "content/pages",
    output: "public",
  },
];

const tempFilePath = await Deno.makeTempFile();

for (
  const pages of [10, 100, 1000, 10000]
) {
  const results: Array<HyperfineResult> = [];

  for (const runner of GENERATORS) {
    const cwd = join(Deno.cwd(), "test", runner.name);
    const contentDir = join(cwd, runner.content);
    const outputDir = join(cwd, runner.output);

    await generate(contentDir, pages);

    const cmd = await spawn("hyperfine", [
      "--warmup",
      "1",
      "--prepare",
      `rm -rf ${outputDir}`,
      "--export-json",
      tempFilePath,
      "--style",
      "none",
      "-n",
      runner.name,
      runner.build,
    ], {
      cwd,
    });

    console.log(cmd.output);
    const data = await Deno.readTextFile(tempFilePath);
    results.push(
      (JSON.parse(data) as { results: Array<HyperfineResult> })
        .results[0],
    );
  }

  console.log(`${pages} pages`);
  console.log(formatResultsToMarkdown(results));
}

type HyperfineResult = {
  command: string;
  mean: number;
  stddev: number;
  median: number;
  system: number;
  min: number;
  max: number;
  times: Array<number>;
  exit_codes: Array<number>;
};

function formatResultsToMarkdown(results: Array<HyperfineResult>): string {
  const fastest = results.reduce((a, b) => (a.mean < b.mean ? a : b));

  const cols = [
    "command",
    "mean (s)",
    "median (s)",
    "min (s)",
    "max (s)",
    "relative",
  ];
  const header = `| ${cols.join(" | ")} |\n${"|---".repeat(cols.length)}|`;

  const rows = results.map((result) => {
    const isFastest = result === fastest;
    const rel = isFastest
      ? "-"
      : `${
        (((result.mean - fastest.mean) / fastest.mean) * 100).toFixed(0)
      }% slower`;
    const name = isFastest ? `${result.command} 🏆` : result.command;

    return `| ${
      [
        name,
        result.mean.toFixed(3),
        result.median.toFixed(3),
        result.min.toFixed(3),
        result.max.toFixed(3),
        rel,
      ].join(" | ")
    } |`;
  });

  return [header, ...rows].join("\n");
}
