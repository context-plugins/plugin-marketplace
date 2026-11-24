import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EndTimeRange = {
  /** The earliest end time in the time range. */
  fromTime?: Date;
  /** The latest end time in the time range. */
  toTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const endTimeRangeSchema: Schema<EndTimeRange> = s.object<EndTimeRange>(
  {
    fromTime: s.optional(s.dateTime()),
    toTime: s.optional(s.dateTime()),
    _keysMap: {
      fromTime: "FromTime",
      toTime: "ToTime",
    },
  },
  { additionalProperties: s.json() },
);
