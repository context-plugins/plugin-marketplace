import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopBotRecommendationRequest = {
  /** The unique identifier of the bot containing the bot recommendation to be stopped. */
  botId: string;
  /** The version of the bot containing the bot recommendation. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the bot recommendation to stop. The string must
   * match one of the supported locales. For more information, see Supported languages
   */
  localeId: string;
  /** The unique identifier of the bot recommendation to be stopped. */
  botRecommendationId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBotRecommendationRequestSchema: Schema<StopBotRecommendationRequest> =
  s.object<StopBotRecommendationRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      botRecommendationId: s.string(),
    },
    { additionalProperties: s.json() },
  );
