import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsIntentResultSchema, type AnalyticsIntentResult } from "./analytics-intent-result.js";

export type ListIntentMetricsResponse = {
  /** The identifier for the bot for which you retrieved intent metrics. */
  botId?: string;
  /** The results for the intent metrics. */
  results?: AnalyticsIntentResult[];
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

export const listIntentMetricsResponseSchema: Schema<ListIntentMetricsResponse> =
  s.object<ListIntentMetricsResponse>(
    {
      botId: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => analyticsIntentResultSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
