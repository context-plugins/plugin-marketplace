import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end
 * (exclusive).The start must be less than or equal to the end. When the start equals the end, the
 * interval is empty (matches no time). When both start and end are unspecified, the interval
 * matches any time.
 */
export type Interval = {
  /**
   * Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will
   * have to be before the end.
   */
  endTime?: string;
  /**
   * Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will
   * have to be the same or after the start.
   */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intervalSchema: Schema<Interval> = s.object<Interval>(
  {
    endTime: s.optional(s.string()),
    startTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
