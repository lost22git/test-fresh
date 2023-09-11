import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const origin = req.headers.get("Origin") || "*";
  const resp = await ctx.next();
  const headers = resp.headers;

  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set(
    "Access-Control-Allow-Headers",
    "*",
  );
  headers.set(
    "Access-Control-Allow-Methods",
    "*",
  );

  return resp;
}
