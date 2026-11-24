import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { matchResultSchema, type MatchResult } from "./match-result.js";

export type ConversationLevelIntentClassificationResultItem = {
  /** The intent name used in the evaluation of intent level success or failure. */
  intentName: string;
  /**
   * The number of times the specific intent is used in the evaluation of intent level success or
   * failure.
   */
  matchResult: MatchResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLevelIntentClassificationResultItemSchema: Schema<ConversationLevelIntentClassificationResultItem> =
  s.object<ConversationLevelIntentClassificationResultItem>(
    {
      intentName: s.string(),
      matchResult: matchResultSchema,
    },
    { additionalProperties: s.json() },
  );
