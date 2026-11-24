import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs
 * once per 24 hours within the following guidelines: * If `schedule_end_date` and
 * schedule_start_date are the same and in the future relative to UTC, the transfer is executed only
 * one time. * If `schedule_end_date` is later than `schedule_start_date` and `schedule_end_date` is
 * in the future relative to UTC, the job runs each day at start_time_of_day through
 * `schedule_end_date`.
 */
export type Date1 = {
  /**
   * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year
   * by itself or a year and month where the day isn't significant.
   */
  day?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const date1Schema: Schema<Date1> = s.object<Date1>(
  {
    day: s.optional(s.int()),
    month: s.optional(s.int()),
    year: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
