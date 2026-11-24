import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Represents a time of day. The date and time zone are either not significant or are specified
 * elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and
 * `google.protobuf.Timestamp`.
 */
export type TimeOfDay = {
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

export const timeOfDaySchema: Schema<TimeOfDay> = s.object<TimeOfDay>(
  {
    minutes: s.optional(s.int()),
    hours: s.optional(s.int()),
    seconds: s.optional(s.int()),
    nanos: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
