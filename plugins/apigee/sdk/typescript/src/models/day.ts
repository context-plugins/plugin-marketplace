import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. */
export const Day = {
  DayOfWeekUnspecified: "DAY_OF_WEEK_UNSPECIFIED",
  Monday: "MONDAY",
  Tuesday: "TUESDAY",
  Wednesday: "WEDNESDAY",
  Thursday: "THURSDAY",
  Friday: "FRIDAY",
  Saturday: "SATURDAY",
  Sunday: "SUNDAY",
} as const;
export type Day = (typeof Day)[keyof typeof Day] | (string & {});

export const daySchema: EnumSchema<Day> = s.enumOf<Day>(Day);
