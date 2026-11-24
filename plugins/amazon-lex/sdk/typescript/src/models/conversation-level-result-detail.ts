import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endToEndResultSchema, type EndToEndResult } from "./end-to-end-result.js";
import {
  speechTranscriptionResultSchema,
  type SpeechTranscriptionResult,
} from "./speech-transcription-result.js";

export type ConversationLevelResultDetail = {
  /** The success or failure of the streaming of the conversation. */
  endToEndResult: EndToEndResult;
  /** The speech transcription success or failure details of the conversation. */
  speechTranscriptionResult?: SpeechTranscriptionResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLevelResultDetailSchema: Schema<ConversationLevelResultDetail> =
  s.object<ConversationLevelResultDetail>(
    {
      endToEndResult: endToEndResultSchema,
      speechTranscriptionResult: s.optional(s.lazy(() => speechTranscriptionResultSchema)),
    },
    { additionalProperties: s.json() },
  );
