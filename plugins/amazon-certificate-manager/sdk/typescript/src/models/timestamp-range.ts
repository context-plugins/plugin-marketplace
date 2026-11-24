import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TimestampRange = {
  /** The start of the time range. This value is inclusive. */
  start?: Date;
  /** The end of the time range. This value is inclusive. */
  end?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timestampRangeSchema: Schema<TimestampRange> = s.object<TimestampRange>(
  {
    start: s.optional(s.dateTime()),
    end: s.optional(s.dateTime()),
    _keysMap: {
      start: "Start",
      end: "End",
    },
  },
  { additionalProperties: s.json() },
);
