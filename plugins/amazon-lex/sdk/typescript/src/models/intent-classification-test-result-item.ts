import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  intentClassificationTestResultItemCountsSchema,
  type IntentClassificationTestResultItemCounts,
} from "./intent-classification-test-result-item-counts.js";

export type IntentClassificationTestResultItem = {
  /** The name of the intent. */
  intentName: string;
  /** Indicates whether the conversation involves multiple turns or not. */
  multiTurnConversation: boolean;
  resultCounts: IntentClassificationTestResultItemCounts;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentClassificationTestResultItemSchema: Schema<IntentClassificationTestResultItem> =
  s.object<IntentClassificationTestResultItem>(
    {
      intentName: s.string(),
      multiTurnConversation: s.boolean(),
      resultCounts: intentClassificationTestResultItemCountsSchema,
    },
    { additionalProperties: s.json() },
  );
