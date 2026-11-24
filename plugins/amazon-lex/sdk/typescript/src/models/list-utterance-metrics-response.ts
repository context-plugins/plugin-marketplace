import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticsUtteranceResultSchema,
  type AnalyticsUtteranceResult,
} from "./analytics-utterance-result.js";

export type ListUtteranceMetricsResponse = {
  /** The identifier for the bot for which you retrieved utterance metrics. */
  botId?: string;
  /** The results for the utterance metrics. */
  results?: AnalyticsUtteranceResult[];
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

export const listUtteranceMetricsResponseSchema: Schema<ListUtteranceMetricsResponse> =
  s.object<ListUtteranceMetricsResponse>(
    {
      botId: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => analyticsUtteranceResultSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
