import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Period1 = {
  _7D: "7d",
} as const;
export type Period1 = (typeof Period1)[keyof typeof Period1] | (string & {});

export const period1Schema: EnumSchema<Period1> = s.enumOf<Period1>(Period1);
