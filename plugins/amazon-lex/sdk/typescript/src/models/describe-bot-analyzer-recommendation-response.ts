import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botAnalyzerRecommendationSchema,
  type BotAnalyzerRecommendation,
} from "./bot-analyzer-recommendation.js";
import { botAnalyzerStatus1Schema, type BotAnalyzerStatus1 } from "./bot-analyzer-status1.js";

export type DescribeBotAnalyzerRecommendationResponse = {
  /** The unique identifier of the bot. */
  botId?: string;
  /** The version of the bot that was analyzed. */
  botVersion?: string;
  /** The locale identifier of the bot locale that was analyzed. */
  localeId?: string;
  /**
   * The current status of the analysis. Valid Values: Processing | Available | Failed | Stopping |
   * Stopped
   */
  botAnalyzerStatus?: BotAnalyzerStatus1;
  /** The date and time when the analysis was initiated. */
  creationDateTime?: Date;
  /**
   * A list of recommendations for optimizing your bot configuration. Each recommendation includes
   * the issue location, priority, description, and proposed fix.
   */
  botAnalyzerRecommendationList?: BotAnalyzerRecommendation[];
  /**
   * If the response is truncated, this token can be used in a subsequent request to retrieve the
   * next page of recommendations.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotAnalyzerRecommendationResponseSchema: Schema<DescribeBotAnalyzerRecommendationResponse> =
  s.object<DescribeBotAnalyzerRecommendationResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botAnalyzerStatus: s.optional(s.lazy(() => botAnalyzerStatus1Schema)),
      creationDateTime: s.optional(s.dateTime()),
      botAnalyzerRecommendationList: s.optional(s.array(s.lazy(() => botAnalyzerRecommendationSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
