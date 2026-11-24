import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Start and end time for the score. */
export type GoogleTypeInterval5 = {
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

export const googleTypeInterval5Schema: Schema<GoogleTypeInterval5> = s.object<GoogleTypeInterval5>(
  {
    endTime: s.optional(s.string()),
    startTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
