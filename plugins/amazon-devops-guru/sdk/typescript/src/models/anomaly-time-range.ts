import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnomalyTimeRange = {
  /** The time when the anomalous behavior started. */
  startTime: Date;
  /** The time when the anomalous behavior ended. */
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalyTimeRangeSchema: Schema<AnomalyTimeRange> = s.object<AnomalyTimeRange>(
  {
    startTime: s.dateTime(),
    endTime: s.optional(s.dateTime()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
    },
  },
  { additionalProperties: s.json() },
);
