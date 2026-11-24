import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentStatisticsSchema, type IntentStatistics } from "./intent-statistics.js";
import { slotTypeStatisticsSchema, type SlotTypeStatistics } from "./slot-type-statistics.js";

export type BotRecommendationResultStatistics = {
  intents?: IntentStatistics;
  slotTypes?: SlotTypeStatistics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botRecommendationResultStatisticsSchema: Schema<BotRecommendationResultStatistics> =
  s.object<BotRecommendationResultStatistics>(
    {
      intents: s.optional(s.lazy(() => intentStatisticsSchema)),
      slotTypes: s.optional(s.lazy(() => slotTypeStatisticsSchema)),
    },
    { additionalProperties: s.json() },
  );
