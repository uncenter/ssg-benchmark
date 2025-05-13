# Static Site Generators Benchmark

Benchmark comparing the following static site generators (SSGs):

- [Lume](https://lumeland.github.io/) v2.5.3 (Deno)
- [Eleventy](https://www.11ty.dev/) v3.1.0-beta.1 (Node)
- [Jekyll](https://jekyllrb.com/) v4.4.1 (Ruby)
- [Hugo](https://gohugo.io/) v0.147.0 (Go)

If you want to add/remove generators, or configure the variations of pages, or configure the iterations of each task, modify the constants in `src/config.ts`.

To run the benchmark: `deno task bench`.

## Results

10 pages

| command  | mean (s) | median (s) | min (s) | max (s) | relative     |
| -------- | -------- | ---------- | ------- | ------- | ------------ |
| hugo 🏆  | 0.039    | 0.039      | 0.036   | 0.042   | -            |
| lume     | 0.318    | 0.314      | 0.309   | 0.355   | 719% slower  |
| jekyll   | 0.400    | 0.398      | 0.394   | 0.418   | 928% slower  |
| eleventy | 0.486    | 0.489      | 0.470   | 0.495   | 1150% slower |

100 pages

| command  | mean (s) | median (s) | min (s) | max (s) | relative    |
| -------- | -------- | ---------- | ------- | ------- | ----------- |
| hugo 🏆  | 0.063    | 0.062      | 0.059   | 0.068   | -           |
| lume     | 0.362    | 0.361      | 0.359   | 0.365   | 478% slower |
| jekyll   | 0.451    | 0.449      | 0.446   | 0.461   | 621% slower |
| eleventy | 0.571    | 0.576      | 0.557   | 0.582   | 813% slower |

1000 pages

| command  | mean (s) | median (s) | min (s) | max (s) | relative    |
| -------- | -------- | ---------- | ------- | ------- | ----------- |
| hugo 🏆  | 0.305    | 0.305      | 0.295   | 0.315   | -           |
| lume     | 0.673    | 0.677      | 0.652   | 0.693   | 120% slower |
| jekyll   | 0.883    | 0.883      | 0.874   | 0.894   | 189% slower |
| eleventy | 1.205    | 1.173      | 1.157   | 1.330   | 295% slower |

10000 pages

| command  | mean (s) | median (s) | min (s) | max (s) | relative    |
| -------- | -------- | ---------- | ------- | ------- | ----------- |
| lume 🏆  | 3.116    | 3.114      | 3.034   | 3.198   | -           |
| hugo     | 3.306    | 3.291      | 3.250   | 3.500   | 6% slower   |
| jekyll   | 5.322    | 5.335      | 5.269   | 5.351   | 71% slower  |
| eleventy | 6.713    | 6.703      | 6.585   | 6.858   | 115% slower |
