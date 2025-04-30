import runners from "./config.ts";
import { Bench } from "tinybench";

const PAGE_VARIATIONS = [10, 100, 1000, 10000];

for (const pages of PAGE_VARIATIONS) {
  const bench = new Bench({ name: pages + " pages", iterations: 10 });

  for (const runner of runners) {
    bench.add(runner.name, async () => {
      await runner.build();
    }, {
      beforeEach: async () => {
        await runner.clear();
      },
      beforeAll: async () => {
        await runner.generate(pages);
      },
    });
  }

  await bench.run();

  console.log(bench.name);
  console.table(bench.table(({ name, result }) => {
    const { latency } = result!;

    return {
      "Name": name,
      "Mean (ms)": `${latency.mean.toFixed(2)} \xb1 ${latency.rme.toFixed(2)}%`,
      "Median (ms)": `${latency.p50!.toFixed(2)} \xb1 ${
        latency.mad!.toFixed(2)
      }`,
      "Samples": latency.samples.length,
    };
  }));
}
