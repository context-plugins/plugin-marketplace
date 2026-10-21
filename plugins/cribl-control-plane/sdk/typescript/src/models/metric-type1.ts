import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of metric to publish (counter, timer, gauge, distribution, summary, or histogram). */
export const MetricType1 = {
  Counter: "counter",
  Timer: "timer",
  Gauge: "gauge",
  Distribution: "distribution",
  Summary: "summary",
  Histogram: "histogram",
} as const;
export type MetricType1 = (typeof MetricType1)[keyof typeof MetricType1] | (string & {});

export const metricType1Schema: EnumSchema<MetricType1> = s.enumOf<MetricType1>(MetricType1);
