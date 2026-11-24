import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetricResult = {
  /** The name of the metric. */
  metricName?: string;
  /** The value for the metric. */
  metricValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricResultSchema: Schema<MetricResult> = s.object<MetricResult>(
  {
    metricName: s.optional(s.string()),
    metricValue: s.optional(s.float64()),
    _keysMap: {
      metricName: "MetricName",
      metricValue: "MetricValue",
    },
  },
  { additionalProperties: s.json() },
);
