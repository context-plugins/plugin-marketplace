import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBotAnalyzerRecommendationRequest = {
  /** The unique identifier of the bot. */
  botId: string;
  /** The unique identifier of the analysis request. */
  botAnalyzerRequestId: string;
  /**
   * If the response from a previous request was truncated, the nextToken value is used to retrieve
   * the next page of recommendations.
   */
  nextToken?: string;
  /** The maximum number of recommendations to return in the response. The default is 5. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotAnalyzerRecommendationRequestSchema: Schema<DescribeBotAnalyzerRecommendationRequest> =
  s.object<DescribeBotAnalyzerRecommendationRequest>(
    {
      botId: s.string(),
      botAnalyzerRequestId: s.string(),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
