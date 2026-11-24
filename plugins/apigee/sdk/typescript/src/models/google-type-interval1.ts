import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. Time range for score calculation. At most 14 days of scores will be returned, and both
 * the start and end dates must be within the last 90 days.
 */
export type GoogleTypeInterval1 = {
  /**
   * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will
   * have to be before the end.
   */
  endTime?: string;
  /**
   * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval
   * will have to be the same or after the start.
   */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleTypeInterval1Schema: Schema<GoogleTypeInterval1> = s.object<GoogleTypeInterval1>(
  {
    endTime: s.optional(s.string()),
    startTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
