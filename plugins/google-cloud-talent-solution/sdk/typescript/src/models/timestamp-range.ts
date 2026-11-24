import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Message representing a period of time between two timestamps. */
export type TimestampRange = {
  /** Begin of the period (inclusive). */
  startTime?: string;
  /** End of the period (exclusive). */
  endTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timestampRangeSchema: Schema<TimestampRange> = s.object<TimestampRange>(
  {
    startTime: s.optional(s.string()),
    endTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
