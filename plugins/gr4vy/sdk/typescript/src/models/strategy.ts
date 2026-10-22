import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Strategy = {
  Debouncing: "debouncing",
} as const;
export type Strategy = (typeof Strategy)[keyof typeof Strategy] | (string & {});

export const strategySchema: EnumSchema<Strategy> = s.enumOf<Strategy>(Strategy);
