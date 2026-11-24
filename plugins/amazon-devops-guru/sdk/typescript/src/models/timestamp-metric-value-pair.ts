import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TimestampMetricValuePair = {
  /** A Timestamp that specifies the time the event occurred. */
  timestamp?: Date;
  /** Value of the anomalous metric data point at respective Timestamp. */
  metricValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timestampMetricValuePairSchema: Schema<TimestampMetricValuePair> =
  s.object<TimestampMetricValuePair>(
    {
      timestamp: s.optional(s.dateTime()),
      metricValue: s.optional(s.float64()),
      _keysMap: {
        timestamp: "Timestamp",
        metricValue: "MetricValue",
      },
    },
    { additionalProperties: s.json() },
  );
