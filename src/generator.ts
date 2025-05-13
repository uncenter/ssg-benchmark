import { ensureDir, expandGlob } from "https://deno.land/std@0.98.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.98.0/path/mod.ts";
import { article, sentence } from "./lorem-ipsum.ts";

export default async function generate(path: string, pages: number) {
  await ensureDir(path);

  for await (const file of expandGlob("*.md", { root: path })) {
    await Deno.remove(file.path);
  }

  for (let index = 1; index <= pages; index++) {
    const file = join(path, `page-${index}.md`);
    const permalink = `pages/${index}.html`;
    const content = generateContent(permalink);

    await Deno.writeTextFile(file, content);
  }
}

function generateContent(permalink: string) {
  const title = sentence();
  const text = article();

  return `---
title: ${title}
permalink: ${permalink}
---

# ${title}

${text}
  `;
}
