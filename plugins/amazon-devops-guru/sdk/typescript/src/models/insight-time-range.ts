import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsightTimeRange = {
  /** The time when the behavior described in an insight started. */
  startTime: Date;
  /** The time when the behavior described in an insight ended. */
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightTimeRangeSchema: Schema<InsightTimeRange> = s.object<InsightTimeRange>(
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
