import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartTimeRange = {
  /** The start time of the time range. */
  fromTime?: Date;
  /** The end time of the time range. */
  toTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTimeRangeSchema: Schema<StartTimeRange> = s.object<StartTimeRange>(
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
