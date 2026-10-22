import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metricsSchema, type Metrics } from "./metrics.js";

export type MetricByVariation = {
  variationKey?: string;
  metrics?: Metrics;
};

export const metricByVariationSchema: Schema<MetricByVariation> = s.object<MetricByVariation>({
  variationKey: s.optional(s.string()),
  metrics: s.optional(s.lazy(() => metricsSchema)),
});
