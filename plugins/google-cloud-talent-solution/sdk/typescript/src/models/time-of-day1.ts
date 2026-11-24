import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The departure time used to calculate traffic impact, represented as google.type.TimeOfDay in
 * local time zone. Currently traffic model is restricted to hour level resolution.
 */
export type TimeOfDay1 = {
  /**
   * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or
   * equal to 59. An API may allow the value 60 if it allows leap-seconds.
   */
  seconds?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /**
   * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal
   * to 999,999,999.
   */
  nanos?: number;
  /**
   * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less
   * than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like
   * business closing time.
   */
  hours?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeOfDay1Schema: Schema<TimeOfDay1> = s.object<TimeOfDay1>(
  {
    seconds: s.optional(s.int()),
    minutes: s.optional(s.int()),
    nanos: s.optional(s.int()),
    hours: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
