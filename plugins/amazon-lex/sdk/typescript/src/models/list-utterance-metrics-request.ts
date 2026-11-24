import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticsBinBySpecificationSchema,
  type AnalyticsBinBySpecification,
} from "./analytics-bin-by-specification.js";
import {
  analyticsUtteranceAttributeSchema,
  type AnalyticsUtteranceAttribute,
} from "./analytics-utterance-attribute.js";
import {
  analyticsUtteranceFilterSchema,
  type AnalyticsUtteranceFilter,
} from "./analytics-utterance-filter.js";
import {
  analyticsUtteranceGroupBySpecificationSchema,
  type AnalyticsUtteranceGroupBySpecification,
} from "./analytics-utterance-group-by-specification.js";
import {
  analyticsUtteranceMetricSchema,
  type AnalyticsUtteranceMetric,
} from "./analytics-utterance-metric.js";

export type ListUtteranceMetricsRequest = {
  /** The identifier for the bot for which you want to retrieve utterance metrics. */
  botId: string;
  /**
   * The date and time that marks the beginning of the range of time for which you want to see
   * utterance metrics.
   */
  startDateTime: Date;
  /**
   * The date and time that marks the end of the range of time for which you want to see utterance
   * metrics.
   */
  endDateTime: Date;
  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the
   * metric you want to return, and the method by which to organize the results.
   */
  metrics: AnalyticsUtteranceMetric[];
  /**
   * A list of objects, each of which contains specifications for organizing the results by time.
   */
  binBy?: AnalyticsBinBySpecification[];
  /**
   * A list of objects, each of which specifies how to group the results. You can group by the
   * following criteria: UtteranceText – The transcription of the utterance. UtteranceState – The
   * state of the utterance. The possible states are detailed in Key definitions in the user guide.
   */
  groupBy?: AnalyticsUtteranceGroupBySpecification[];
  /**
   * A list containing attributes related to the utterance that you want the response to return. The
   * following attributes are possible: LastUsedIntent – The last used intent at the time of the
   * utterance.
   */
  attributes?: AnalyticsUtteranceAttribute[];
  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   */
  filters?: AnalyticsUtteranceFilter[];
  /**
   * The maximum number of results to return in each page of results. If there are fewer results
   * than the maximum page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListUtteranceMetrics operation contains more results than specified in
   * the maxResults parameter, a token is returned in the response. Use the returned token in the
   * nextToken parameter of a ListUtteranceMetrics request to return the next page of results. For a
   * complete set of results, call the ListUtteranceMetrics operation until the nextToken returned
   * in the response is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listUtteranceMetricsRequestSchema: Schema<ListUtteranceMetricsRequest> =
  s.object<ListUtteranceMetricsRequest>(
    {
      botId: s.string(),
      startDateTime: s.dateTime(),
      endDateTime: s.dateTime(),
      metrics: s.array(s.lazy(() => analyticsUtteranceMetricSchema)),
      binBy: s.optional(s.array(s.lazy(() => analyticsBinBySpecificationSchema))),
      groupBy: s.optional(s.array(s.lazy(() => analyticsUtteranceGroupBySpecificationSchema))),
      attributes: s.optional(s.array(s.lazy(() => analyticsUtteranceAttributeSchema))),
      filters: s.optional(s.array(s.lazy(() => analyticsUtteranceFilterSchema))),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
