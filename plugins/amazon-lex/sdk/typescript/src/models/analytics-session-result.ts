import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsBinKeySchema, type AnalyticsBinKey } from "./analytics-bin-key.js";
import {
  analyticsSessionGroupByKeySchema,
  type AnalyticsSessionGroupByKey,
} from "./analytics-session-group-by-key.js";
import {
  analyticsSessionMetricResultSchema,
  type AnalyticsSessionMetricResult,
} from "./analytics-session-metric-result.js";

export type AnalyticsSessionResult = {
  /**
   * A list of objects containing the criteria you requested for binning results and the values of
   * the bins.
   */
  binKeys?: AnalyticsBinKey[];
  /**
   * A list of objects containing the criteria you requested for grouping results and the values of
   * the bins.
   */
  groupByKeys?: AnalyticsSessionGroupByKey[];
  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the
   * metric you want to return, and the method by which to organize the results.
   */
  metricsResults?: AnalyticsSessionMetricResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSessionResultSchema: Schema<AnalyticsSessionResult> = s.object<AnalyticsSessionResult>(
  {
    binKeys: s.optional(s.array(s.lazy(() => analyticsBinKeySchema))),
    groupByKeys: s.optional(s.array(s.lazy(() => analyticsSessionGroupByKeySchema))),
    metricsResults: s.optional(s.array(s.lazy(() => analyticsSessionMetricResultSchema))),
  },
  { additionalProperties: s.json() },
);
