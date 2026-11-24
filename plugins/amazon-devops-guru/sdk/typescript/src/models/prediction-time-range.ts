import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PredictionTimeRange = {
  /**
   * The time range during which a metric limit is expected to be exceeded. This applies to
   * proactive insights only.
   */
  startTime: Date;
  /** The time when the behavior in a proactive insight is expected to end. */
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const predictionTimeRangeSchema: Schema<PredictionTimeRange> = s.object<PredictionTimeRange>(
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
