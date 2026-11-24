import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudWatchMetricsDetailSchema, type CloudWatchMetricsDetail } from "./cloud-watch-metrics-detail.js";
import {
  performanceInsightsMetricsDetailSchema,
  type PerformanceInsightsMetricsDetail,
} from "./performance-insights-metrics-detail.js";

export type AnomalySourceDetails = {
  /**
   * An array of CloudWatchMetricsDetail objects that contain information about analyzed CloudWatch
   * metrics that show anomalous behavior.
   */
  cloudWatchMetrics?: CloudWatchMetricsDetail[];
  /**
   * An array of PerformanceInsightsMetricsDetail objects that contain information about analyzed
   * Performance Insights metrics that show anomalous behavior.
   */
  performanceInsightsMetrics?: PerformanceInsightsMetricsDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalySourceDetailsSchema: Schema<AnomalySourceDetails> = s.object<AnomalySourceDetails>(
  {
    cloudWatchMetrics: s.optional(s.array(s.lazy(() => cloudWatchMetricsDetailSchema))),
    performanceInsightsMetrics: s.optional(s.array(s.lazy(() => performanceInsightsMetricsDetailSchema))),
    _keysMap: {
      cloudWatchMetrics: "CloudWatchMetrics",
      performanceInsightsMetrics: "PerformanceInsightsMetrics",
    },
  },
  { additionalProperties: s.json() },
);
