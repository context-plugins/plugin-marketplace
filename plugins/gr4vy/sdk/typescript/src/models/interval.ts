import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The cadence unit for the subscription plan. */
export const Interval = {
  Day: "DAY",
  Week: "WEEK",
  Month: "MONTH",
  Year: "YEAR",
} as const;
export type Interval = (typeof Interval)[keyof typeof Interval] | (string & {});

export const intervalSchema: EnumSchema<Interval> = s.enumOf<Interval>(Interval);
