import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The period each evaluation looks at. */
export const TimeInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Quarter: "quarter",
  Year: "year",
} as const;
export type TimeInterval = (typeof TimeInterval)[keyof typeof TimeInterval] | (string & {});

export const timeIntervalSchema: EnumSchema<TimeInterval> = s.enumOf<TimeInterval>(TimeInterval);
