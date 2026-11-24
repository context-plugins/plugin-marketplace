import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticsIntentStageResultSchema,
  type AnalyticsIntentStageResult,
} from "./analytics-intent-stage-result.js";

export type ListIntentStageMetricsResponse = {
  /** The identifier for the bot for which you retrieved intent stage metrics. */
  botId?: string;
  /** The results for the intent stage metrics. */
  results?: AnalyticsIntentStageResult[];
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

export const listIntentStageMetricsResponseSchema: Schema<ListIntentStageMetricsResponse> =
  s.object<ListIntentStageMetricsResponse>(
    {
      botId: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => analyticsIntentStageResultSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
