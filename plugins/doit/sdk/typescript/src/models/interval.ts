import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Bucket interval used for the trend series. */
export const Interval = {
  Day: "day",
  Week: "week",
  Month: "month",
} as const;
export type Interval = (typeof Interval)[keyof typeof Interval] | (string & {});

export const intervalSchema: EnumSchema<Interval> = s.enumOf<Interval>(Interval);
