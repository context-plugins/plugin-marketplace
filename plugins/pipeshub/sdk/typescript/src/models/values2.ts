import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Values2 = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type Values2 = (typeof Values2)[keyof typeof Values2] | (string & {});

export const values2Schema: EnumSchema<Values2> = s.enumOf<Values2>(Values2);
