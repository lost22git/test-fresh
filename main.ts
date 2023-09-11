/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

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

await start(manifest, config);
