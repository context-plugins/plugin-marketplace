import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsSessionFilterSchema, type AnalyticsSessionFilter } from "./analytics-session-filter.js";
import { sessionDataSortBySchema, type SessionDataSortBy } from "./session-data-sort-by.js";

export type ListSessionAnalyticsDataRequest = {
  /** The identifier for the bot for which you want to retrieve session analytics. */
  botId: string;
  /**
   * The date and time that marks the beginning of the range of time for which you want to see
   * session analytics.
   */
  startDateTime: Date;
  /**
   * The date and time that marks the end of the range of time for which you want to see session
   * analytics.
   */
  endDateTime: Date;
  sortBy?: SessionDataSortBy;
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
   * If the response from the ListSessionAnalyticsData operation contains more results than
   * specified in the maxResults parameter, a token is returned in the response. Use the returned
   * token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page
   * of results. For a complete set of results, call the ListSessionAnalyticsData operation until
   * the nextToken returned in the response is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSessionAnalyticsDataRequestSchema: Schema<ListSessionAnalyticsDataRequest> =
  s.object<ListSessionAnalyticsDataRequest>(
    {
      botId: s.string(),
      startDateTime: s.dateTime(),
      endDateTime: s.dateTime(),
      sortBy: s.optional(s.lazy(() => sessionDataSortBySchema)),
      filters: s.optional(s.array(s.lazy(() => analyticsSessionFilterSchema))),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
