import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLevelResultDetailSchema,
  type ConversationLevelResultDetail,
} from "./conversation-level-result-detail.js";
import { endToEndResult3Schema, type EndToEndResult3 } from "./end-to-end-result3.js";
import { executionErrorDetailsSchema, type ExecutionErrorDetails } from "./execution-error-details.js";
import { intentMatchResultSchema, type IntentMatchResult } from "./intent-match-result.js";
import { slotMatchResultSchema, type SlotMatchResult } from "./slot-match-result.js";
import {
  speechTranscriptionResult2Schema,
  type SpeechTranscriptionResult2,
} from "./speech-transcription-result2.js";
import {
  userTurnInputSpecificationSchema,
  type UserTurnInputSpecification,
} from "./user-turn-input-specification.js";
import {
  userTurnOutputSpecificationSchema,
  type UserTurnOutputSpecification,
} from "./user-turn-output-specification.js";

export type UserTurnResult = {
  input: UserTurnInputSpecification;
  expectedOutput: UserTurnOutputSpecification;
  actualOutput?: UserTurnOutputSpecification;
  errorDetails?: ExecutionErrorDetails;
  /**
   * Specifies whether the expected and actual outputs match or not, or if there is an error in
   * execution.
   */
  endToEndResult?: EndToEndResult3;
  /** Specifies whether the expected and actual intents match or not. */
  intentMatchResult?: IntentMatchResult;
  /** Specifies whether the expected and actual slots match or not. */
  slotMatchResult?: SlotMatchResult;
  /**
   * Specifies whether the expected and actual speech transcriptions match or not, or if there is an
   * error in execution.
   */
  speechTranscriptionResult?: SpeechTranscriptionResult2;
  conversationLevelResult?: ConversationLevelResultDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTurnResultSchema: Schema<UserTurnResult> = s.object<UserTurnResult>(
  {
    input: userTurnInputSpecificationSchema,
    expectedOutput: userTurnOutputSpecificationSchema,
    actualOutput: s.optional(s.lazy(() => userTurnOutputSpecificationSchema)),
    errorDetails: s.optional(s.lazy(() => executionErrorDetailsSchema)),
    endToEndResult: s.optional(s.lazy(() => endToEndResult3Schema)),
    intentMatchResult: s.optional(s.lazy(() => intentMatchResultSchema)),
    slotMatchResult: s.optional(s.lazy(() => slotMatchResultSchema)),
    speechTranscriptionResult: s.optional(s.lazy(() => speechTranscriptionResult2Schema)),
    conversationLevelResult: s.optional(s.lazy(() => conversationLevelResultDetailSchema)),
  },
  { additionalProperties: s.json() },
);
