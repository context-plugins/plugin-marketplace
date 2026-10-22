import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The output metric type */
export const MetricType = {
  Automatic: "automatic",
  Counter: "counter",
  Distribution: "distribution",
  Gauge: "gauge",
  Histogram: "histogram",
  Summary: "summary",
  Timer: "timer",
} as const;
export type MetricType = (typeof MetricType)[keyof typeof MetricType] | (string & {});

export const metricTypeSchema: EnumSchema<MetricType> = s.enumOf<MetricType>(MetricType);
