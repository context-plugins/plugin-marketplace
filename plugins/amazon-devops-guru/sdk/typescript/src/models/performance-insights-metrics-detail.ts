import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  performanceInsightsMetricQuerySchema,
  type PerformanceInsightsMetricQuery,
} from "./performance-insights-metric-query.js";
import {
  performanceInsightsReferenceDataSchema,
  type PerformanceInsightsReferenceData,
} from "./performance-insights-reference-data.js";
import { performanceInsightsStatSchema, type PerformanceInsightsStat } from "./performance-insights-stat.js";

export type PerformanceInsightsMetricsDetail = {
  /** The name used for a specific Performance Insights metric. */
  metricDisplayName?: string;
  /** The unit of measure for a metric. For example, a session or a process. */
  unit?: string;
  metricQuery?: PerformanceInsightsMetricQuery;
  /** For more information, see PerformanceInsightsReferenceData . */
  referenceData?: PerformanceInsightsReferenceData[];
  /** The metric statistics during the anomalous period detected by DevOps Guru; */
  statsAtAnomaly?: PerformanceInsightsStat[];
  /**
   * Typical metric statistics that are not considered anomalous. When DevOps Guru analyzes metrics,
   * it compares them to StatsAtBaseline to help determine if they are anomalous.
   */
  statsAtBaseline?: PerformanceInsightsStat[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const performanceInsightsMetricsDetailSchema: Schema<PerformanceInsightsMetricsDetail> =
  s.object<PerformanceInsightsMetricsDetail>(
    {
      metricDisplayName: s.optional(s.string()),
      unit: s.optional(s.string()),
      metricQuery: s.optional(s.lazy(() => performanceInsightsMetricQuerySchema)),
      referenceData: s.optional(s.array(s.lazy(() => performanceInsightsReferenceDataSchema))),
      statsAtAnomaly: s.optional(s.array(s.lazy(() => performanceInsightsStatSchema))),
      statsAtBaseline: s.optional(s.array(s.lazy(() => performanceInsightsStatSchema))),
      _keysMap: {
        metricDisplayName: "MetricDisplayName",
        unit: "Unit",
        metricQuery: "MetricQuery",
        referenceData: "ReferenceData",
        statsAtAnomaly: "StatsAtAnomaly",
        statsAtBaseline: "StatsAtBaseline",
      },
    },
    { additionalProperties: s.json() },
  );
