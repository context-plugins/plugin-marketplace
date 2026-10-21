import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Time range */
export const TimeRange = {
  Absolute: "absolute",
  Relative: "relative",
} as const;
export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange] | (string & {});

export const timeRangeSchema: EnumSchema<TimeRange> = s.enumOf<TimeRange>(TimeRange);
