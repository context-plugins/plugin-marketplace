import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLevelTestResultItemSchema,
  type ConversationLevelTestResultItem,
} from "./conversation-level-test-result-item.js";

export type ConversationLevelTestResults = {
  /** The item list in the test set results data at the conversation level. */
  items: ConversationLevelTestResultItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLevelTestResultsSchema: Schema<ConversationLevelTestResults> =
  s.object<ConversationLevelTestResults>(
    {
      items: s.array(s.lazy(() => conversationLevelTestResultItemSchema)),
    },
    { additionalProperties: s.json() },
  );
