import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticsBinBySpecificationSchema,
  type AnalyticsBinBySpecification,
} from "./analytics-bin-by-specification.js";
import { analyticsIntentFilterSchema, type AnalyticsIntentFilter } from "./analytics-intent-filter.js";
import {
  analyticsIntentGroupBySpecificationSchema,
  type AnalyticsIntentGroupBySpecification,
} from "./analytics-intent-group-by-specification.js";
import { analyticsIntentMetricSchema, type AnalyticsIntentMetric } from "./analytics-intent-metric.js";

export type ListIntentMetricsRequest = {
  /** The identifier for the bot for which you want to retrieve intent metrics. */
  botId: string;
  /**
   * The timestamp that marks the beginning of the range of time for which you want to see intent
   * metrics.
   */
  startDateTime: Date;
  /**
   * The date and time that marks the end of the range of time for which you want to see intent
   * metrics.
   */
  endDateTime: Date;
  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the
   * metric you want to return, and the order by which to organize the results.
   */
  metrics: AnalyticsIntentMetric[];
  /**
   * A list of objects, each of which contains specifications for organizing the results by time.
   */
  binBy?: AnalyticsBinBySpecification[];
  /**
   * A list of objects, each of which specifies how to group the results. You can group by the
   * following criteria: IntentName – The name of the intent. IntentEndState – The final state of
   * the intent. The possible end states are detailed in Key definitions in the user guide.
   */
  groupBy?: AnalyticsIntentGroupBySpecification[];
  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   */
  filters?: AnalyticsIntentFilter[];
  /**
   * The maximum number of results to return in each page of results. If there are fewer results
   * than the maximum page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListIntentMetrics operation contains more results than specified in
   * the maxResults parameter, a token is returned in the response. Use the returned token in the
   * nextToken parameter of a ListIntentMetrics request to return the next page of results. For a
   * complete set of results, call the ListIntentMetrics operation until the nextToken returned in
   * the response is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listIntentMetricsRequestSchema: Schema<ListIntentMetricsRequest> =
  s.object<ListIntentMetricsRequest>(
    {
      botId: s.string(),
      startDateTime: s.dateTime(),
      endDateTime: s.dateTime(),
      metrics: s.array(s.lazy(() => analyticsIntentMetricSchema)),
      binBy: s.optional(s.array(s.lazy(() => analyticsBinBySpecificationSchema))),
      groupBy: s.optional(s.array(s.lazy(() => analyticsIntentGroupBySpecificationSchema))),
      filters: s.optional(s.array(s.lazy(() => analyticsIntentFilterSchema))),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
