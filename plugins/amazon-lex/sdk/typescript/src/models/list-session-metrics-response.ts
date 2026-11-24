import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsSessionResultSchema, type AnalyticsSessionResult } from "./analytics-session-result.js";

export type ListSessionMetricsResponse = {
  /** The identifier for the bot for which you retrieved session metrics. */
  botId?: string;
  /** The results for the session metrics. */
  results?: AnalyticsSessionResult[];
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

export const listSessionMetricsResponseSchema: Schema<ListSessionMetricsResponse> =
  s.object<ListSessionMetricsResponse>(
    {
      botId: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => analyticsSessionResultSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
