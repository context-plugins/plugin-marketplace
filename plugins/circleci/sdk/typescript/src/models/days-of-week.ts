import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DaysOfWeek = {
  Mon: "MON",
  Tue: "TUE",
  Wed: "WED",
  Thu: "THU",
  Fri: "FRI",
  Sat: "SAT",
  Sun: "SUN",
} as const;
export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek] | (string & {});

export const daysOfWeekSchema: EnumSchema<DaysOfWeek> = s.enumOf<DaysOfWeek>(DaysOfWeek);
