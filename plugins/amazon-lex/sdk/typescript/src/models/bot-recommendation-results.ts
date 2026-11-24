import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botRecommendationResultStatisticsSchema,
  type BotRecommendationResultStatistics,
} from "./bot-recommendation-result-statistics.js";

export type BotRecommendationResults = {
  /** The presigned URL link of the recommended bot definition. */
  botLocaleExportUrl?: string;
  /** The presigned url link of the associated transcript. */
  associatedTranscriptsUrl?: string;
  statistics?: BotRecommendationResultStatistics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botRecommendationResultsSchema: Schema<BotRecommendationResults> =
  s.object<BotRecommendationResults>(
    {
      botLocaleExportUrl: s.optional(s.string()),
      associatedTranscriptsUrl: s.optional(s.string()),
      statistics: s.optional(s.lazy(() => botRecommendationResultStatisticsSchema)),
    },
    { additionalProperties: s.json() },
  );
