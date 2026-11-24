import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TimestampRange = {
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the category
   * match.
   */
  beginOffsetMillis?: number;
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the end of the category
   * match.
   */
  endOffsetMillis?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timestampRangeSchema: Schema<TimestampRange> = s.object<TimestampRange>(
  {
    beginOffsetMillis: s.optional(s.int()),
    endOffsetMillis: s.optional(s.int()),
    _keysMap: {
      beginOffsetMillis: "BeginOffsetMillis",
      endOffsetMillis: "EndOffsetMillis",
    },
  },
  { additionalProperties: s.json() },
);
