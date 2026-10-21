import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Period2 = {
  _30D: "30d",
} as const;
export type Period2 = (typeof Period2)[keyof typeof Period2] | (string & {});

export const period2Schema: EnumSchema<Period2> = s.enumOf<Period2>(Period2);
