import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Publication window applied, or null for none. */
export const TimeRange1 = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type TimeRange1 = (typeof TimeRange1)[keyof typeof TimeRange1] | (string & {});

export const timeRange1Schema: EnumSchema<TimeRange1> = s.enumOf<TimeRange1>(TimeRange1);
