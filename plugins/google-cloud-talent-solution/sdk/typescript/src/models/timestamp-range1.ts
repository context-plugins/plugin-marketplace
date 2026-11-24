import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Jobs published within a range specified by this filter are searched against. */
export type TimestampRange1 = {
  /** Begin of the period (inclusive). */
  startTime?: string;
  /** End of the period (exclusive). */
  endTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timestampRange1Schema: Schema<TimestampRange1> = s.object<TimestampRange1>(
  {
    startTime: s.optional(s.string()),
    endTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
