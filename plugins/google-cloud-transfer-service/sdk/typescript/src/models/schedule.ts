import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { date1Schema, type Date1 } from "./date1.js";
import { date3Schema, type Date3 } from "./date3.js";
import { timeOfDay1Schema, type TimeOfDay1 } from "./time-of-day1.js";
import { timeOfDay2Schema, type TimeOfDay2 } from "./time-of-day2.js";

/** Transfers can be scheduled to recur or to run just once. */
export type Schedule = {
  /**
   * Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If
   * `schedule_start_date` and start_time_of_day are in the past relative to the job's creation
   * time, the transfer starts the day after you schedule the transfer request. **Note:** When
   * starting jobs at or near midnight UTC it is possible that a job starts later than expected. For
   * example, if you send an outbound request on June 1 one millisecond prior to midnight UTC and
   * the Storage Transfer Service server receives the request on June 2, then it creates a
   * TransferJob with `schedule_start_date` set to June 2 and a `start_time_of_day` set to midnight
   * UTC. The first scheduled TransferOperation takes place on June 3 at midnight UTC.
   */
  scheduleStartDate?: Date3;
  /**
   * Interval between the start of each scheduled TransferOperation. If unspecified, the default
   * value is 24 hours. This value may not be less than 1 hour.
   */
  repeatInterval?: string;
  /**
   * The time in UTC that no further transfer operations are scheduled. Combined with
   * schedule_end_date, `end_time_of_day` specifies the end date and time for starting new transfer
   * operations. This field must be greater than or equal to the timestamp corresponding to the
   * combination of schedule_start_date and start_time_of_day, and is subject to the following: * If
   * `end_time_of_day` is not set and `schedule_end_date` is set, then a default value of `23:59:59`
   * is used for `end_time_of_day`. * If `end_time_of_day` is set and `schedule_end_date` is not
   * set, then INVALID_ARGUMENT is returned.
   */
  endTimeOfDay?: TimeOfDay1;
  /**
   * The time in UTC that a transfer job is scheduled to run. Transfers may start later than this
   * time. If `start_time_of_day` is not specified: * One-time transfers run immediately. *
   * Recurring transfers run immediately, and each day at midnight UTC, through schedule_end_date.
   * If `start_time_of_day` is specified: * One-time transfers run at the specified time. *
   * Recurring transfers run at the specified time each day, through `schedule_end_date`.
   */
  startTimeOfDay?: TimeOfDay2;
  /**
   * The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs
   * once per 24 hours within the following guidelines: * If `schedule_end_date` and
   * schedule_start_date are the same and in the future relative to UTC, the transfer is executed
   * only one time. * If `schedule_end_date` is later than `schedule_start_date` and
   * `schedule_end_date` is in the future relative to UTC, the job runs each day at
   * start_time_of_day through `schedule_end_date`.
   */
  scheduleEndDate?: Date1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduleSchema: Schema<Schedule> = s.object<Schedule>(
  {
    scheduleStartDate: s.optional(s.lazy(() => date3Schema)),
    repeatInterval: s.optional(s.string()),
    endTimeOfDay: s.optional(s.lazy(() => timeOfDay1Schema)),
    startTimeOfDay: s.optional(s.lazy(() => timeOfDay2Schema)),
    scheduleEndDate: s.optional(s.lazy(() => date1Schema)),
  },
  { additionalProperties: s.json() },
);
