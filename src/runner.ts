import { join } from "@std/path";
import generate from "./generator.ts";

type RunnerOptions = {
  name: string;
  build: string[];
  content: string;
  output: string;
};

export default class Runner {
  options: RunnerOptions;
  cwd: string;

  constructor(options: RunnerOptions) {
    this.options = options;
    this.cwd = join(Deno.cwd(), "test", this.options.name);
  }

  get name() {
    return this.options.name;
  }

  async generate(pages: number): Promise<void> {
    const path = join(this.cwd, this.options.content);
    await generate(path, pages);
  }

  async build(): Promise<void> {
    await this.exec(this.options.build, this.cwd);
  }

  async clear(): Promise<void> {
    const path = join(this.cwd, this.options.output);

    try {
      return await Deno.remove(path, { recursive: true });
    } catch (err) {}
  }

  async exec(cmd: string[], cwd: string): Promise<void> {
    const process = new Deno.Command(cmd.at(0)!, {
      args: cmd.slice(1) || [],
      cwd,
      stdout: "null",
    });

    await process.output();
  }
}
