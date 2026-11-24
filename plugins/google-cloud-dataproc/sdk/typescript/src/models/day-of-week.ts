import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The day of week, when the window starts. */
export const DayOfWeek = {
  DayOfWeekUnspecified: "DAY_OF_WEEK_UNSPECIFIED",
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
