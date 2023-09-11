#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

type StartupInfo = {
  pid: number;
  port: number;
  reuse_port: boolean;
  deno_version: string;
};

const startup_info: StartupInfo = {
  pid: Deno.pid,
  port: 3000,
  reuse_port: false,
  deno_version: Deno.version.deno,
};
console.log(`Startup info: ${JSON.stringify(startup_info)}`);

config.port = startup_info.port;
config.reusePort = startup_info.reuse_port;

await dev(import.meta.url, "./main.ts", config);
