import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botRecommendationStatusSchema, type BotRecommendationStatus } from "./bot-recommendation-status.js";

export type StopBotRecommendationResponse = {
  /** The unique identifier of the bot containing the bot recommendation that is being stopped. */
  botId?: string;
  /** The version of the bot containing the recommendation that is being stopped. */
  botVersion?: string;
  /**
   * The identifier of the language and locale of the bot response to stop. The string must match
   * one of the supported locales. For more information, see Supported languages
   */
  localeId?: string;
  /**
   * The status of the bot recommendation. If the status is Failed, then the reasons for the failure
   * are listed in the failureReasons field.
   */
  botRecommendationStatus?: BotRecommendationStatus;
  /** The unique identifier of the bot recommendation that is being stopped. */
  botRecommendationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBotRecommendationResponseSchema: Schema<StopBotRecommendationResponse> =
  s.object<StopBotRecommendationResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botRecommendationStatus: s.optional(s.lazy(() => botRecommendationStatusSchema)),
      botRecommendationId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
