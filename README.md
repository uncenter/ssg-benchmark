# Static site generators comparison

Benchmark for Lume static site generator and comparison with other generators.

## Instructions

The directory `ssg` contains all static site generators to test. Make sure you have all installed:

- Lume (Deno) [See instructions](https://lumeland.github.io/)
- Eleventy (Node) [See instructions](https://www.11ty.dev/)
- Jekyll (Ruby) [See instructions](https://jekyllrb.com/)
- Hugo (Go) [See instructions](https://gohugo.io/)

If you want to add or remove any generator, edit the `config.js`.

To test if all generators work fine, run `deno run --unstable -A cli.js --generate` to generate the content. Then you can go to the directory of every generator to test the build.

To run the benchmark: `deno run --unstable -A cli.js`. You can add some options:

- `--pages` To generate different number of pages. By default is `1000`.
- `--runs` How many times are run every build in order to have more accurate and stable results. By default is `10`.

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
