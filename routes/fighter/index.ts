import { Handlers } from "$fresh/server.ts";
import {
  Fighter,
  FighterCreate,
  FighterEdit,
  fighters,
  ok,
  toFighter,
} from "../../model.ts";

export const handler: Handlers<Fighter | null> = {
  GET(_req, _ctx) {
    return Response.json(ok(fighters));
  },

  async POST(req, _ctx) {
    const fighter_create: FighterCreate = await req.json();

    if (fighter_create?.name === "" || fighter_create?.name === undefined) {
      throw new Error("VALIDATION");
    }

    const new_fighter = toFighter(fighter_create);
    fighters.push(new_fighter);
    return Response.json(ok(new_fighter));
  },

  async PUT(req, _ctx) {
    const fighter_edit: FighterEdit = await req.json();

    if (fighter_edit?.name === "" || fighter_edit?.name === undefined) {
      throw new Error("VALIDATION");
    }

    const found = fighters.find((x) => x.name === fighter_edit.name);
    if (found === null || found === undefined) {
      throw new Error("NOT_FOUND");
    }

    found.skill = fighter_edit.skill;
    found.updated_at = new Date();

    return Response.json(ok(found));
  },
};
