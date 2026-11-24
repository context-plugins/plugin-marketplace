import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If
 * `schedule_start_date` and start_time_of_day are in the past relative to the job's creation time,
 * the transfer starts the day after you schedule the transfer request. **Note:** When starting jobs
 * at or near midnight UTC it is possible that a job starts later than expected. For example, if you
 * send an outbound request on June 1 one millisecond prior to midnight UTC and the Storage Transfer
 * Service server receives the request on June 2, then it creates a TransferJob with
 * `schedule_start_date` set to June 2 and a `start_time_of_day` set to midnight UTC. The first
 * scheduled TransferOperation takes place on June 3 at midnight UTC.
 */
export type Date3 = {
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

export const date3Schema: Schema<Date3> = s.object<Date3>(
  {
    day: s.optional(s.int()),
    month: s.optional(s.int()),
    year: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
