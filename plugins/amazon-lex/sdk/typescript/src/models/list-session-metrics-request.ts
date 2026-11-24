import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticsBinBySpecificationSchema,
  type AnalyticsBinBySpecification,
} from "./analytics-bin-by-specification.js";
import { analyticsSessionFilterSchema, type AnalyticsSessionFilter } from "./analytics-session-filter.js";
import {
  analyticsSessionGroupBySpecificationSchema,
  type AnalyticsSessionGroupBySpecification,
} from "./analytics-session-group-by-specification.js";
import { analyticsSessionMetricSchema, type AnalyticsSessionMetric } from "./analytics-session-metric.js";

export type ListSessionMetricsRequest = {
  /** The identifier for the bot for which you want to retrieve session metrics. */
  botId: string;
  /**
   * The date and time that marks the beginning of the range of time for which you want to see
   * session metrics.
   */
  startDateTime: Date;
  /**
   * The date and time that marks the end of the range of time for which you want to see session
   * metrics.
   */
  endDateTime: Date;
  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the
   * metric you want to return, and the method by which to organize the results.
   */
  metrics: AnalyticsSessionMetric[];
  /**
   * A list of objects, each of which contains specifications for organizing the results by time.
   */
  binBy?: AnalyticsBinBySpecification[];
  /**
   * A list of objects, each of which specifies how to group the results. You can group by the
   * following criteria: ConversationEndState – The final state of the conversation. The possible
   * end states are detailed in Key definitions in the user guide. LocaleId – The unique identifier
   * of the bot locale.
   */
  groupBy?: AnalyticsSessionGroupBySpecification[];
  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   */
  filters?: AnalyticsSessionFilter[];
  /**
   * The maximum number of results to return in each page of results. If there are fewer results
   * than the maximum page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListSessionMetrics operation contains more results than specified in
   * the maxResults parameter, a token is returned in the response. Use the returned token in the
   * nextToken parameter of a ListSessionMetrics request to return the next page of results. For a
   * complete set of results, call the ListSessionMetrics operation until the nextToken returned in
   * the response is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSessionMetricsRequestSchema: Schema<ListSessionMetricsRequest> =
  s.object<ListSessionMetricsRequest>(
    {
      botId: s.string(),
      startDateTime: s.dateTime(),
      endDateTime: s.dateTime(),
      metrics: s.array(s.lazy(() => analyticsSessionMetricSchema)),
      binBy: s.optional(s.array(s.lazy(() => analyticsBinBySpecificationSchema))),
      groupBy: s.optional(s.array(s.lazy(() => analyticsSessionGroupBySpecificationSchema))),
      filters: s.optional(s.array(s.lazy(() => analyticsSessionFilterSchema))),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
