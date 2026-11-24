import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { matchResult1Schema, type MatchResult1 } from "./match-result1.js";

export type ConversationLevelSlotResolutionResultItem = {
  /** The intents used in the slots list for the slot resolution details. */
  intentName: string;
  /** The slot name in the slots list for the slot resolution details. */
  slotName: string;
  /** The number of matching slots used in the slots listings for the slot resolution evaluation. */
  matchResult: MatchResult1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLevelSlotResolutionResultItemSchema: Schema<ConversationLevelSlotResolutionResultItem> =
  s.object<ConversationLevelSlotResolutionResultItem>(
    {
      intentName: s.string(),
      slotName: s.string(),
      matchResult: matchResult1Schema,
    },
    { additionalProperties: s.json() },
  );
