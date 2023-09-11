import { Handlers } from "$fresh/server.ts";
import { Fighter, fighters, ok, updateFighters } from "../../model.ts";

export const handler: Handlers<Fighter | null> = {
  GET(_req, ctx) {
    const name = decodeURI(ctx.params.name);
    const found = fighters.filter((x) => x.name === name);
    return Response.json(ok(found));
  },

  DELETE(_req, ctx) {
    const name = decodeURI(ctx.params.name);
    const found = fighters.filter((x) => x.name === name);
    updateFighters(fighters.filter((x) => x.name !== name));
    return Response.json(ok(found));
  },
};
