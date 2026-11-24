import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  scheduleIntervalInternalSchema,
  scheduleIntervalSchema,
  type ScheduleInterval,
} from "./schedule-interval.js";

/** Recurring processing schedule configured for the monitor. */
export type SignalSchedulePolicy = {
  /** Times when the monitor runs. Must contain between 1 and 24 intervals. */
  intervals: ScheduleInterval[];
  /**
   * IANA time zone used to interpret schedule intervals, such as America/Chicago. Defaults to UTC.
   */
  timezoneId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signalSchedulePolicyProperties: s.Shape<SignalSchedulePolicy> = {
  intervals: s.array(s.lazy(() => scheduleIntervalInternalSchema)),
  timezoneId: s.optionalNullable(s.string()),
};

export const signalSchedulePolicyInternalSchema: Schema<SignalSchedulePolicy> =
  s.object<SignalSchedulePolicy>(signalSchedulePolicyProperties, { additionalProperties: s.json() });

export const signalSchedulePolicySchema: Schema<SignalSchedulePolicy> = s.lazySchema(() =>
  s.object<SignalSchedulePolicy>(
    {
      ...signalSchedulePolicyProperties,
      intervals: s.array(s.lazy(() => scheduleIntervalSchema)).check(s.minLength(1), s.maxLength(24)),
    },
    { additionalProperties: s.json() },
  ),
);
