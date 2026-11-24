import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLevelIntentClassificationResultItemSchema,
  type ConversationLevelIntentClassificationResultItem,
} from "./conversation-level-intent-classification-result-item.js";
import {
  conversationLevelSlotResolutionResultItemSchema,
  type ConversationLevelSlotResolutionResultItem,
} from "./conversation-level-slot-resolution-result-item.js";
import { endToEndResult1Schema, type EndToEndResult1 } from "./end-to-end-result1.js";
import {
  speechTranscriptionResult1Schema,
  type SpeechTranscriptionResult1,
} from "./speech-transcription-result1.js";

export type ConversationLevelTestResultItem = {
  /** The conversation Id of the test result evaluation item. */
  conversationId: string;
  /** The end-to-end success or failure of the test result evaluation item. */
  endToEndResult: EndToEndResult1;
  /** The speech transcription success or failure of the test result evaluation item. */
  speechTranscriptionResult?: SpeechTranscriptionResult1;
  /** The intent classification of the test result evaluation item. */
  intentClassificationResults: ConversationLevelIntentClassificationResultItem[];
  /** The slot success or failure of the test result evaluation item. */
  slotResolutionResults: ConversationLevelSlotResolutionResultItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLevelTestResultItemSchema: Schema<ConversationLevelTestResultItem> =
  s.object<ConversationLevelTestResultItem>(
    {
      conversationId: s.string(),
      endToEndResult: endToEndResult1Schema,
      speechTranscriptionResult: s.optional(s.lazy(() => speechTranscriptionResult1Schema)),
      intentClassificationResults: s.array(
        s.lazy(() => conversationLevelIntentClassificationResultItemSchema),
      ),
      slotResolutionResults: s.array(s.lazy(() => conversationLevelSlotResolutionResultItemSchema)),
    },
    { additionalProperties: s.json() },
  );
