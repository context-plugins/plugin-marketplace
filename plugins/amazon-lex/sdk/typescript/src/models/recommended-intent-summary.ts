import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecommendedIntentSummary = {
  /** The unique identifier of a recommended intent associated with the bot recommendation. */
  intentId?: string;
  /** The name of a recommended intent associated with the bot recommendation. */
  intentName?: string;
  /**
   * The count of sample utterances of a recommended intent that is associated with a bot
   * recommendation.
   */
  sampleUtterancesCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendedIntentSummarySchema: Schema<RecommendedIntentSummary> =
  s.object<RecommendedIntentSummary>(
    {
      intentId: s.optional(s.string()),
      intentName: s.optional(s.string()),
      sampleUtterancesCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
