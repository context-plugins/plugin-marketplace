import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Time interval in which diagnosis should be carried out on the cluster. */
export type Interval2 = {
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

export const interval2Schema: Schema<Interval2> = s.object<Interval2>(
  {
    endTime: s.optional(s.string()),
    startTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
