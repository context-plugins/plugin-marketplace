import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  performanceInsightsMetricQuerySchema,
  type PerformanceInsightsMetricQuery,
} from "./performance-insights-metric-query.js";

export type PerformanceInsightsReferenceMetric = {
  metricQuery?: PerformanceInsightsMetricQuery;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const performanceInsightsReferenceMetricSchema: Schema<PerformanceInsightsReferenceMetric> =
  s.object<PerformanceInsightsReferenceMetric>(
    {
      metricQuery: s.optional(s.lazy(() => performanceInsightsMetricQuerySchema)),
      _keysMap: {
        metricQuery: "MetricQuery",
      },
    },
    { additionalProperties: s.json() },
  );
