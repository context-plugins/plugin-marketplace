import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing days of the week. */
export const DaysOfWeekEnum = {
  Mon: "mon",
  Tue: "tue",
  Wed: "wed",
  Thu: "thu",
  Fri: "fri",
  Sat: "sat",
  Sun: "sun",
} as const;
export type DaysOfWeekEnum = (typeof DaysOfWeekEnum)[keyof typeof DaysOfWeekEnum] | (string & {});

export const daysOfWeekEnumSchema: EnumSchema<DaysOfWeekEnum> = s.enumOf<DaysOfWeekEnum>(DaysOfWeekEnum);
