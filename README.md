# Static Site Generators Benchmark

Benchmark comparing the following static site generators (SSGs):

- [Lume](https://lumeland.github.io/) (Deno)
- [Eleventy](https://www.11ty.dev/) (Node)
- [Jekyll](https://jekyllrb.com/) (Ruby)
- [Hugo](https://gohugo.io/) (Go)

If you want to add/remove generators, or configure the variations of pages, or configure the iterations of each task, modify the constants in `src/config.ts`.


To run the benchmark: `deno task bench`.

## Latest results

### Small sites (100 pages)

```
deno run --unstable -A cli.js --pages 100

SITES WITH 100 PAGES:
(10 runs)
┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │ name       │ seconds │ duration     │
├───────┼────────────┼─────────┼──────────────┤
│     0 │ "hugo"     │ 0.074   │ "▓░░░░░░░░░" │
│     1 │ "lume"     │ 0.39    │ "▓▓▓▓▓░░░░░" │
│     2 │ "jekyll"   │ 0.537   │ "▓▓▓▓▓▓░░░░" │
│     3 │ "eleventy" │ 0.852   │ "▓▓▓▓▓▓▓▓▓▓" │
└───────┴────────────┴─────────┴──────────────┘
```

### Medium sites (1,000 pages)

```
deno run --unstable -A cli.js --pages 1000

SITES WITH 1000 PAGES:
(10 runs)
┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │ name       │ seconds │ duration     │
├───────┼────────────┼─────────┼──────────────┤
│     0 │ "hugo"     │ 0.33    │ "▓▓░░░░░░░░" │
│     1 │ "lume"     │ 0.743   │ "▓▓▓▓▓░░░░░" │
│     2 │ "jekyll"   │ 1.082   │ "▓▓▓▓▓▓▓░░░" │
│     3 │ "eleventy" │ 1.484   │ "▓▓▓▓▓▓▓▓▓▓" │
└───────┴────────────┴─────────┴──────────────┘
```

### Big sites (10,000 pages)

```
deno run --unstable -A cli.js --pages 10000

SITES WITH 10000 PAGES:
(10 runs)
┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │ name       │ seconds │ duration     │
├───────┼────────────┼─────────┼──────────────┤
│     0 │ "lume"     │ 3.431   │ "▓▓▓▓▓░░░░░" │
│     1 │ "hugo"     │ 3.5     │ "▓▓▓▓▓░░░░░" │
│     2 │ "jekyll"   │ 6.538   │ "▓▓▓▓▓▓▓▓▓▓" │
│     3 │ "eleventy" │ 6.803   │ "▓▓▓▓▓▓▓▓▓▓" │
└───────┴────────────┴─────────┴──────────────┘
```
