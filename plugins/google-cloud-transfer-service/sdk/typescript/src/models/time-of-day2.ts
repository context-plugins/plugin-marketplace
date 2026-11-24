import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The time in UTC that a transfer job is scheduled to run. Transfers may start later than this
 * time. If `start_time_of_day` is not specified: * One-time transfers run immediately. * Recurring
 * transfers run immediately, and each day at midnight UTC, through schedule_end_date. If
 * `start_time_of_day` is specified: * One-time transfers run at the specified time. * Recurring
 * transfers run at the specified time each day, through `schedule_end_date`.
 */
export type TimeOfDay2 = {
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /**
   * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less
   * than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like
   * business closing time.
   */
  hours?: number;
  /**
   * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or
   * equal to 59. An API may allow the value 60 if it allows leap-seconds.
   */
  seconds?: number;
  /**
   * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal
   * to 999,999,999.
   */
  nanos?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeOfDay2Schema: Schema<TimeOfDay2> = s.object<TimeOfDay2>(
  {
    minutes: s.optional(s.int()),
    hours: s.optional(s.int()),
    seconds: s.optional(s.int()),
    nanos: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
