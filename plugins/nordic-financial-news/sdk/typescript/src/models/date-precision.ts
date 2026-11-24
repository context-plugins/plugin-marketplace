import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Granularity of `scheduled_at`. `exact` = timestamp known; `day` = date only; `month` = only the
 * month is known. Consumers that need a date should still use `scheduled_at` (set to a
 * representative point inside the window).
 */
export const DatePrecision = {
  Exact: "exact",
  Day: "day",
  Month: "month",
} as const;
export type DatePrecision = (typeof DatePrecision)[keyof typeof DatePrecision] | (string & {});

export const datePrecisionSchema: EnumSchema<DatePrecision> = s.enumOf<DatePrecision>(DatePrecision);
