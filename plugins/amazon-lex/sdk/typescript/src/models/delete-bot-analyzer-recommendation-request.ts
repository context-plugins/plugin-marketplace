import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBotAnalyzerRecommendationRequest = {
  /** The unique identifier of the bot. */
  botId: string;
  /** The unique identifier of the analysis request whose recommendations should be deleted. */
  botAnalyzerRequestId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotAnalyzerRecommendationRequestSchema: Schema<DeleteBotAnalyzerRecommendationRequest> =
  s.object<DeleteBotAnalyzerRecommendationRequest>(
    {
      botId: s.string(),
      botAnalyzerRequestId: s.string(),
    },
    { additionalProperties: s.json() },
  );
