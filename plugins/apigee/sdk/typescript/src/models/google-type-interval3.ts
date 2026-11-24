import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Time range for the stats. */
export type GoogleTypeInterval3 = {
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

export const googleTypeInterval3Schema: Schema<GoogleTypeInterval3> = s.object<GoogleTypeInterval3>(
  {
    endTime: s.optional(s.string()),
    startTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
