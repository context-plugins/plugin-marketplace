import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TimeRange = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange] | (string & {});

export const timeRangeSchema: EnumSchema<TimeRange> = s.enumOf<TimeRange>(TimeRange);
