import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The day of week to use for time alignment during aggregation. The day must be in uppercase. */
export const DayOfWeek = {
  Monday: "MONDAY",
  Tuesday: "TUESDAY",
  Wednesday: "WEDNESDAY",
  Thursday: "THURSDAY",
  Friday: "FRIDAY",
  Saturday: "SATURDAY",
  Sunday: "SUNDAY",
} as const;
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek] | (string & {});

export const dayOfWeekSchema: EnumSchema<DayOfWeek> = s.enumOf<DayOfWeek>(DayOfWeek);
