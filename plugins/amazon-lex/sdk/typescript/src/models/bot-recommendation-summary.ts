import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botRecommendationStatusSchema, type BotRecommendationStatus } from "./bot-recommendation-status.js";

export type BotRecommendationSummary = {
  /**
   * The status of the bot recommendation. If the status is Failed, then the reasons for the failure
   * are listed in the failureReasons field.
   */
  botRecommendationStatus: BotRecommendationStatus;
  /** The unique identifier of the bot recommendation to be updated. */
  botRecommendationId: string;
  /** A timestamp of the date and time that the bot recommendation was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the bot recommendation was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botRecommendationSummarySchema: Schema<BotRecommendationSummary> =
  s.object<BotRecommendationSummary>(
    {
      botRecommendationStatus: botRecommendationStatusSchema,
      botRecommendationId: s.string(),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
