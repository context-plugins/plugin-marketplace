import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Strategy1 = {
  Threshold: "threshold",
} as const;
export type Strategy1 = (typeof Strategy1)[keyof typeof Strategy1] | (string & {});

export const strategy1Schema: EnumSchema<Strategy1> = s.enumOf<Strategy1>(Strategy1);
