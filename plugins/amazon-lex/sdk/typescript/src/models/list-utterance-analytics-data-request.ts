import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticsUtteranceFilterSchema,
  type AnalyticsUtteranceFilter,
} from "./analytics-utterance-filter.js";
import { utteranceDataSortBySchema, type UtteranceDataSortBy } from "./utterance-data-sort-by.js";

export type ListUtteranceAnalyticsDataRequest = {
  /** The identifier for the bot for which you want to retrieve utterance analytics. */
  botId: string;
  /**
   * The date and time that marks the beginning of the range of time for which you want to see
   * utterance analytics.
   */
  startDateTime: Date;
  /**
   * The date and time that marks the end of the range of time for which you want to see utterance
   * analytics.
   */
  endDateTime: Date;
  sortBy?: UtteranceDataSortBy;
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
   * If the response from the ListUtteranceAnalyticsData operation contains more results than
   * specified in the maxResults parameter, a token is returned in the response. Use the returned
   * token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next
   * page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation
   * until the nextToken returned in the response is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listUtteranceAnalyticsDataRequestSchema: Schema<ListUtteranceAnalyticsDataRequest> =
  s.object<ListUtteranceAnalyticsDataRequest>(
    {
      botId: s.string(),
      startDateTime: s.dateTime(),
      endDateTime: s.dateTime(),
      sortBy: s.optional(s.lazy(() => utteranceDataSortBySchema)),
      filters: s.optional(s.array(s.lazy(() => analyticsUtteranceFilterSchema))),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
