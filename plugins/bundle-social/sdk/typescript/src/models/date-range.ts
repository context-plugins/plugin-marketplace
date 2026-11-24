import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DateRange = {
  _1Day: "1DAY",
  _7Day: "7DAY",
  _30Day: "30DAY",
} as const;
export type DateRange = (typeof DateRange)[keyof typeof DateRange] | (string & {});

export const dateRangeSchema: EnumSchema<DateRange> = s.enumOf<DateRange>(DateRange);
