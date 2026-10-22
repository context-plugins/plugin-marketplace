import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Current2 = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type Current2 = (typeof Current2)[keyof typeof Current2] | (string & {});

export const current2Schema: EnumSchema<Current2> = s.enumOf<Current2>(Current2);
