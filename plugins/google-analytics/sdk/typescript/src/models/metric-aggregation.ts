import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MetricAggregation = {
  MetricAggregationUnspecified: "METRIC_AGGREGATION_UNSPECIFIED",
  Total: "TOTAL",
  Minimum: "MINIMUM",
  Maximum: "MAXIMUM",
  Count: "COUNT",
} as const;
export type MetricAggregation = (typeof MetricAggregation)[keyof typeof MetricAggregation] | (string & {});

export const metricAggregationSchema: EnumSchema<MetricAggregation> =
  s.enumOf<MetricAggregation>(MetricAggregation);
