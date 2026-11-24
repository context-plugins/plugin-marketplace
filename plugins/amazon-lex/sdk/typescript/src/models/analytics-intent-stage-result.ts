import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsBinKeySchema, type AnalyticsBinKey } from "./analytics-bin-key.js";
import {
  analyticsIntentStageGroupByKeySchema,
  type AnalyticsIntentStageGroupByKey,
} from "./analytics-intent-stage-group-by-key.js";
import {
  analyticsIntentStageMetricResultSchema,
  type AnalyticsIntentStageMetricResult,
} from "./analytics-intent-stage-metric-result.js";

export type AnalyticsIntentStageResult = {
  /**
   * A list of objects containing the criteria you requested for binning results and the values of
   * the bins.
   */
  binKeys?: AnalyticsBinKey[];
  /**
   * A list of objects containing the criteria you requested for grouping results and the values of
   * the bins.
   */
  groupByKeys?: AnalyticsIntentStageGroupByKey[];
  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the
   * metric you want to return, and the method by which to organize the results.
   */
  metricsResults?: AnalyticsIntentStageMetricResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentStageResultSchema: Schema<AnalyticsIntentStageResult> =
  s.object<AnalyticsIntentStageResult>(
    {
      binKeys: s.optional(s.array(s.lazy(() => analyticsBinKeySchema))),
      groupByKeys: s.optional(s.array(s.lazy(() => analyticsIntentStageGroupByKeySchema))),
      metricsResults: s.optional(s.array(s.lazy(() => analyticsIntentStageMetricResultSchema))),
    },
    { additionalProperties: s.json() },
  );
