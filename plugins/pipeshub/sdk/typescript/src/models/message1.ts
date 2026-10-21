import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appliedFiltersSchema, type AppliedFilters } from "./applied-filters.js";
import { chatAttachmentRefSchema, type ChatAttachmentRef } from "./chat-attachment-ref.js";
import { citation1Schema, type Citation1 } from "./citation1.js";
import { confidence1Schema, type Confidence1 } from "./confidence1.js";
import { contentFormat1Schema, type ContentFormat1 } from "./content-format1.js";
import { conversationModelInfoSchema, type ConversationModelInfo } from "./conversation-model-info.js";
import { followUpQuestionSchema, type FollowUpQuestion } from "./follow-up-question.js";
import { messageFeedbackSchema, type MessageFeedback } from "./message-feedback.js";
import { messagePartSchema, type MessagePart } from "./message-part.js";
import { messageReasoningTurnSchema, type MessageReasoningTurn } from "./message-reasoning-turn.js";
import { messageToolCallSchema, type MessageToolCall } from "./message-tool-call.js";
import { messageType1Schema, type MessageType1 } from "./message-type1.js";
import { metadata2Schema, type Metadata2 } from "./metadata2.js";
import { referenceDatum2Schema, type ReferenceDatum2 } from "./reference-datum2.js";

export type Message1 = {
  id?: string;
  messageType?: MessageType1;
  content?: string;
  contentFormat?: ContentFormat1;
  /**
   * AI confidence in the answer. Present only on `bot_response` messages, and only when the model
   * emitted a trailing confidence block.
   *
   * This field is now optional and nullable; it was previously always present and non-nullable.
   * Treat a missing or `null` value as "no confidence reported" and guard before using it. Change
   * effective in SDK v1.2.0 (v1.1.0 and earlier always populated it).
   */
  confidence?: Confidence1 | null;
  /** Citations attached to this message. `citationData` is the populated citation document. */
  citations?: Citation1[];
  followUpQuestions?: FollowUpQuestion[];
  feedback?: MessageFeedback[];
  /** Reference IDs surfaced from tool responses, used for follow-up queries */
  referenceData?: ReferenceDatum2[];
  /** AI model configuration recorded against a conversation or message. */
  modelInfo?: ConversationModelInfo;
  /**
   * Rich filter state selected by the user, used for display and persistence only. This mirrors the
   * active selection shown in the UI and is distinct from the machine-readable `filters` field used
   * for retrieval scoping.
   */
  appliedFilters?: AppliedFilters;
  /** Files uploaded for this message turn (see `POST /conversations/attachments/upload`). */
  attachments?: ChatAttachmentRef[];
  /** Tool call results invoked during this message turn. */
  tools?: MessageToolCall[];
  /** Persisted chain-of-thought for this turn. */
  reasoning?: MessageReasoningTurn[];
  /** Ordered agent-activity transcript for this turn. */
  parts?: MessagePart[];
  metadata?: Metadata2;
  createdAt?: Date;
  updatedAt?: Date;
};

export const message1Schema: Schema<Message1> = s.object<Message1>({
  id: s.optional(s.string()),
  messageType: s.optional(s.lazy(() => messageType1Schema)),
  content: s.optional(s.string()),
  contentFormat: s.optional(s.lazy(() => contentFormat1Schema)),
  confidence: s.optionalNullable(s.lazy(() => confidence1Schema)),
  citations: s.optional(s.array(s.lazy(() => citation1Schema))),
  followUpQuestions: s.optional(s.array(s.lazy(() => followUpQuestionSchema))),
  feedback: s.optional(s.array(s.lazy(() => messageFeedbackSchema))),
  referenceData: s.optional(s.array(s.lazy(() => referenceDatum2Schema))),
  modelInfo: s.optional(s.lazy(() => conversationModelInfoSchema)),
  appliedFilters: s.optional(s.lazy(() => appliedFiltersSchema)),
  attachments: s.optional(s.array(s.lazy(() => chatAttachmentRefSchema))),
  tools: s.optional(s.array(s.lazy(() => messageToolCallSchema))),
  reasoning: s.optional(s.array(s.lazy(() => messageReasoningTurnSchema))),
  parts: s.optional(s.array(s.lazy(() => messagePartSchema))),
  metadata: s.optional(s.lazy(() => metadata2Schema)),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    id: "_id",
  },
});
