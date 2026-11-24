import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CostEstimationTimeRange = {
  /** The start time of the cost estimation. */
  startTime?: Date;
  /** The end time of the cost estimation. */
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costEstimationTimeRangeSchema: Schema<CostEstimationTimeRange> =
  s.object<CostEstimationTimeRange>(
    {
      startTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      _keysMap: {
        startTime: "StartTime",
        endTime: "EndTime",
      },
    },
    { additionalProperties: s.json() },
  );
