import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsBinKeySchema, type AnalyticsBinKey } from "./analytics-bin-key.js";
import {
  analyticsIntentGroupByKeySchema,
  type AnalyticsIntentGroupByKey,
} from "./analytics-intent-group-by-key.js";
import {
  analyticsIntentMetricResultSchema,
  type AnalyticsIntentMetricResult,
} from "./analytics-intent-metric-result.js";

export type AnalyticsIntentResult = {
  /**
   * A list of objects containing the criteria you requested for binning results and the values of
   * the bins.
   */
  binKeys?: AnalyticsBinKey[];
  /**
   * A list of objects containing the criteria you requested for grouping results and the values of
   * the groups.
   */
  groupByKeys?: AnalyticsIntentGroupByKey[];
  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the
   * metric you want to return, and the method by which to organize the results.
   */
  metricsResults?: AnalyticsIntentMetricResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentResultSchema: Schema<AnalyticsIntentResult> = s.object<AnalyticsIntentResult>(
  {
    binKeys: s.optional(s.array(s.lazy(() => analyticsBinKeySchema))),
    groupByKeys: s.optional(s.array(s.lazy(() => analyticsIntentGroupByKeySchema))),
    metricsResults: s.optional(s.array(s.lazy(() => analyticsIntentMetricResultSchema))),
  },
  { additionalProperties: s.json() },
);
