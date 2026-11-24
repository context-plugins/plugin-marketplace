import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBotRecommendationRequest = {
  /** The unique identifier of the bot associated with the bot recommendation. */
  botId: string;
  /** The version of the bot associated with the bot recommendation. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the bot recommendation to describe. The string
   * must match one of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** The identifier of the bot recommendation to describe. */
  botRecommendationId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotRecommendationRequestSchema: Schema<DescribeBotRecommendationRequest> =
  s.object<DescribeBotRecommendationRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      botRecommendationId: s.string(),
    },
    { additionalProperties: s.json() },
  );
