import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsBinKeySchema, type AnalyticsBinKey } from "./analytics-bin-key.js";
import {
  analyticsUtteranceAttributeResultSchema,
  type AnalyticsUtteranceAttributeResult,
} from "./analytics-utterance-attribute-result.js";
import {
  analyticsUtteranceGroupByKeySchema,
  type AnalyticsUtteranceGroupByKey,
} from "./analytics-utterance-group-by-key.js";
import {
  analyticsUtteranceMetricResultSchema,
  type AnalyticsUtteranceMetricResult,
} from "./analytics-utterance-metric-result.js";

export type AnalyticsUtteranceResult = {
  /**
   * A list of objects containing the criteria you requested for binning results and the values of
   * the bins.
   */
  binKeys?: AnalyticsBinKey[];
  /**
   * A list of objects containing the criteria you requested for grouping results and the values of
   * the bins.
   */
  groupByKeys?: AnalyticsUtteranceGroupByKey[];
  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the
   * metric you want to return, and the method by which to organize the results.
   */
  metricsResults?: AnalyticsUtteranceMetricResult[];
  /**
   * A list of objects containing information about the last used intent at the time of an
   * utterance.
   */
  attributeResults?: AnalyticsUtteranceAttributeResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsUtteranceResultSchema: Schema<AnalyticsUtteranceResult> =
  s.object<AnalyticsUtteranceResult>(
    {
      binKeys: s.optional(s.array(s.lazy(() => analyticsBinKeySchema))),
      groupByKeys: s.optional(s.array(s.lazy(() => analyticsUtteranceGroupByKeySchema))),
      metricsResults: s.optional(s.array(s.lazy(() => analyticsUtteranceMetricResultSchema))),
      attributeResults: s.optional(s.array(s.lazy(() => analyticsUtteranceAttributeResultSchema))),
    },
    { additionalProperties: s.json() },
  );
