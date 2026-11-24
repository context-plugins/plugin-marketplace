import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  performanceInsightsMetricDimensionGroupSchema,
  type PerformanceInsightsMetricDimensionGroup,
} from "./performance-insights-metric-dimension-group.js";

export type PerformanceInsightsMetricQuery = {
  /**
   * The name of the meteric used used when querying an Performance Insights GetResourceMetrics API
   * for anomaly metrics. Valid values for Metric are: db.load.avg - a scaled representation of the
   * number of active sessions for the database engine. db.sampledload.avg - the raw number of
   * active sessions for the database engine. If the number of active sessions is less than an
   * internal Performance Insights threshold, db.load.avg and db.sampledload.avg are the same value.
   * If the number of active sessions is greater than the internal threshold, Performance Insights
   * samples the active sessions, with db.loa
   */
  metric?: string;
  groupBy?: PerformanceInsightsMetricDimensionGroup;
  /**
   * One or more filters to apply to a Performance Insights GetResourceMetrics API query.
   * Restrictions: Any number of filters by the same dimension, as specified in the GroupBy
   * parameter. A single filter for any other dimension in this dimension group.
   */
  filter?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const performanceInsightsMetricQuerySchema: Schema<PerformanceInsightsMetricQuery> =
  s.object<PerformanceInsightsMetricQuery>(
    {
      metric: s.optional(s.string()),
      groupBy: s.optional(s.lazy(() => performanceInsightsMetricDimensionGroupSchema)),
      filter: s.optional(s.record(s.string(), s.string())),
      _keysMap: {
        metric: "Metric",
        groupBy: "GroupBy",
        filter: "Filter",
      },
    },
    { additionalProperties: s.json() },
  );
