import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Days when a WEEKLY schedule runs. Requires 1 through 7 values from MONDAY through SUNDAY. */
export const Day = {
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
