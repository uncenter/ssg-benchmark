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
}
