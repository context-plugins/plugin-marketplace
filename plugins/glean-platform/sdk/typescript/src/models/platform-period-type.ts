import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of period over which usage is counted. */
export const PlatformPeriodType = {
  RecurringCalendarMonth: "RECURRING_CALENDAR_MONTH",
} as const;
export type PlatformPeriodType = (typeof PlatformPeriodType)[keyof typeof PlatformPeriodType] | (string & {});

export const platformPeriodTypeSchema: EnumSchema<PlatformPeriodType> =
  s.enumOf<PlatformPeriodType>(PlatformPeriodType);
