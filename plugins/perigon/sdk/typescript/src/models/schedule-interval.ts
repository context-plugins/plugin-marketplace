import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { daySchema, type Day } from "./day.js";
import { scheduleTypeSchema, type ScheduleType } from "./schedule-type.js";

/** Times when the monitor runs. Must contain between 1 and 24 intervals. */
export type ScheduleInterval = {
  /** Hour when the monitor runs, from 0 through 23. */
  hour?: number | null;
  /** Minute when the monitor runs, from 0 through 59. */
  minute?: number | null;
  /** Days when a WEEKLY schedule runs. Requires 1 through 7 values from MONDAY through SUNDAY. */
  days?: Day[] | null;
  /**
   * Days of the month when a MONTHLY schedule runs. Required for MONTHLY schedules; each value must
   * be from 1 through 31.
   */
  daysOfMonth?: number[] | null;
  /** Schedule recurrence type. Accepts WEEKLY or MONTHLY and defaults to WEEKLY. */
  scheduleType: ScheduleType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scheduleIntervalProperties: s.Shape<ScheduleInterval> = {
  hour: s.optionalNullable(s.int()),
  minute: s.optionalNullable(s.int()),
  days: s.optionalNullable(s.array(s.lazy(() => daySchema))),
  daysOfMonth: s.optionalNullable(s.array(s.int())),
  scheduleType: scheduleTypeSchema,
};

export const scheduleIntervalInternalSchema: Schema<ScheduleInterval> = s.object<ScheduleInterval>(
  scheduleIntervalProperties,
  { additionalProperties: s.json() },
);

export const scheduleIntervalSchema: Schema<ScheduleInterval> = s.lazySchema(() =>
  s.object<ScheduleInterval>(
    {
      ...scheduleIntervalProperties,
      hour: s.optionalNullable(s.int().check(s.gte(0), s.lte(23))),
      minute: s.optionalNullable(s.int().check(s.gte(0), s.lte(59))),
      days: s.optionalNullable(
        s.array(s.lazy(() => daySchema)).check(s.minLength(1), s.maxLength(7), s.uniqueItems()),
      ),
      daysOfMonth: s.optionalNullable(
        s.array(s.int().check(s.gte(1), s.lte(31))).check(s.minLength(0), s.maxLength(31), s.uniqueItems()),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
