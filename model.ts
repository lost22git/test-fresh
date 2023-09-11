export class Result<T> {
  data?: T;
  code: number;
  msg: string;

  constructor(data: T, code: number, msg: string) {
    this.data = data;
    this.code = code;
    this.msg = msg;
  }
}

export function ok<T>(data?: T): Result<T> {
  return { data: data, code: 0, msg: "" };
}

export function err<T>(code: number, msg: string): Result<T> {
  return { code: code, msg: msg };
}

export class Fighter {
  id: string;
  name: string;
  skill: string[];
  created_at: Date;
  updated_at?: Date;

  constructor(
    {
      id = crypto.randomUUID(),
      name,
      skill,
      created_at = new Date(),
      updated_at,
    }: {
      id?: string;
      name: string;
      skill: string[];
      created_at?: Date;
      updated_at?: Date;
    },
  ) {
    this.id = id;
    this.name = name;
    this.skill = skill;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export type FighterCreate = {
  name: string;
  skill: string[];
};

export type FighterEdit = {
  name: string;
  skill: string[];
};

export function toFighter(a: FighterCreate): Fighter {
  return new Fighter({ name: a.name, skill: a.skill });
}

export var fighters = [
  new Fighter({ name: "隆", skill: ["波动拳"] }),
  new Fighter({ name: "肯", skill: ["升龙拳"] }),
];

export function updateFighters(data: Fighter[]) {
  fighters = data;
}
