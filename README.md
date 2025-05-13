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

| command | mean (s) | median (s) | min (s) | max (s) | relative |
|---|---|---|---|---|---|
| lume | 0.314 | 0.310 | 0.305 | 0.357 | 724% slower |
| eleventy | 0.486 | 0.485 | 0.472 | 0.500 | 1176% slower |
| jekyll | 0.399 | 0.396 | 0.393 | 0.424 | 947% slower |
| hugo 🏆 | 0.038 | 0.038 | 0.035 | 0.042 | - |

100 pages

| command | mean (s) | median (s) | min (s) | max (s) | relative |
|---|---|---|---|---|---|
| lume | 0.360 | 0.359 | 0.352 | 0.381 | 465% slower |
| eleventy | 0.562 | 0.559 | 0.553 | 0.575 | 780% slower |
| jekyll | 0.446 | 0.447 | 0.434 | 0.460 | 600% slower |
| hugo 🏆 | 0.064 | 0.064 | 0.059 | 0.071 | - |

1000 pages

| command | mean (s) | median (s) | min (s) | max (s) | relative |
|---|---|---|---|---|---|
| lume | 0.665 | 0.663 | 0.656 | 0.677 | 122% slower |
| eleventy | 1.167 | 1.166 | 1.149 | 1.182 | 289% slower |
| jekyll | 0.861 | 0.857 | 0.833 | 0.897 | 187% slower |
| hugo 🏆 | 0.300 | 0.296 | 0.290 | 0.323 | - |

10000 pages

| command | mean (s) | median (s) | min (s) | max (s) | relative |
|---|---|---|---|---|---|
| lume 🏆 | 3.093 | 3.091 | 3.011 | 3.223 | - |
| eleventy | 6.635 | 6.637 | 6.527 | 6.741 | 115% slower |
| jekyll | 5.209 | 5.194 | 5.162 | 5.322 | 68% slower |
| hugo | 3.275 | 3.257 | 3.202 | 3.494 | 6% slower |