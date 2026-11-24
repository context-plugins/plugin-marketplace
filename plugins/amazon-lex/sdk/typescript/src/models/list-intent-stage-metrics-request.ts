import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticsBinBySpecificationSchema,
  type AnalyticsBinBySpecification,
} from "./analytics-bin-by-specification.js";
import {
  analyticsIntentStageFilterSchema,
  type AnalyticsIntentStageFilter,
} from "./analytics-intent-stage-filter.js";
import {
  analyticsIntentStageGroupBySpecificationSchema,
  type AnalyticsIntentStageGroupBySpecification,
} from "./analytics-intent-stage-group-by-specification.js";
import {
  analyticsIntentStageMetricSchema,
  type AnalyticsIntentStageMetric,
} from "./analytics-intent-stage-metric.js";

export type ListIntentStageMetricsRequest = {
  /** The identifier for the bot for which you want to retrieve intent stage metrics. */
  botId: string;
  /**
   * The date and time that marks the beginning of the range of time for which you want to see
   * intent stage metrics.
   */
  startDateTime: Date;
  /**
   * The date and time that marks the end of the range of time for which you want to see intent
   * stage metrics.
   */
  endDateTime: Date;
  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the
   * metric you want to return, and the method by which to organize the results.
   */
  metrics: AnalyticsIntentStageMetric[];
  /**
   * A list of objects, each of which contains specifications for organizing the results by time.
   */
  binBy?: AnalyticsBinBySpecification[];
  /**
   * A list of objects, each of which specifies how to group the results. You can group by the
   * following criteria: IntentStageName – The name of the intent stage. SwitchedToIntent – The
   * intent to which the conversation was switched (if any).
   */
  groupBy?: AnalyticsIntentStageGroupBySpecification[];
  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   */
  filters?: AnalyticsIntentStageFilter[];
  /**
   * The maximum number of results to return in each page of results. If there are fewer results
   * than the maximum page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListIntentStageMetrics operation contains more results than specified
   * in the maxResults parameter, a token is returned in the response. Use the returned token in the
   * nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For
   * a complete set of results, call the ListIntentStageMetrics operation until the nextToken
   * returned in the response is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listIntentStageMetricsRequestSchema: Schema<ListIntentStageMetricsRequest> =
  s.object<ListIntentStageMetricsRequest>(
    {
      botId: s.string(),
      startDateTime: s.dateTime(),
      endDateTime: s.dateTime(),
      metrics: s.array(s.lazy(() => analyticsIntentStageMetricSchema)),
      binBy: s.optional(s.array(s.lazy(() => analyticsBinBySpecificationSchema))),
      groupBy: s.optional(s.array(s.lazy(() => analyticsIntentStageGroupBySpecificationSchema))),
      filters: s.optional(s.array(s.lazy(() => analyticsIntentStageFilterSchema))),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
