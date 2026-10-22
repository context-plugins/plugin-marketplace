import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentConversationDetailMessageCitationSchema,
  type AgentConversationDetailMessageCitation,
} from "./agent-conversation-detail-message-citation.js";
import { appliedFiltersSchema, type AppliedFilters } from "./applied-filters.js";
import { chatAttachmentRefSchema, type ChatAttachmentRef } from "./chat-attachment-ref.js";
import { confidenceSchema, type Confidence } from "./confidence.js";
import { contentFormat1Schema, type ContentFormat1 } from "./content-format1.js";
import { conversationModelInfoSchema, type ConversationModelInfo } from "./conversation-model-info.js";
import { followUpQuestionSchema, type FollowUpQuestion } from "./follow-up-question.js";
import { messageFeedbackSchema, type MessageFeedback } from "./message-feedback.js";
import { messagePartSchema, type MessagePart } from "./message-part.js";
import { messageReasoningTurnSchema, type MessageReasoningTurn } from "./message-reasoning-turn.js";
import { messageToolCallSchema, type MessageToolCall } from "./message-tool-call.js";
import { messageType1Schema, type MessageType1 } from "./message-type1.js";
import { metadata2Schema, type Metadata2 } from "./metadata2.js";
import { referenceDatumSchema, type ReferenceDatum } from "./reference-datum.js";

/**
 * Message shape returned by `GET /agents/{agentKey}/conversations/{conversationId}`. The response
 * spreads the stored message document and replaces `citations` with populated citation objects.
 */
export type AgentConversationDetailMessage = {
  id?: string;
  messageType?: MessageType1;
  content?: string;
  contentFormat?: ContentFormat1;
  citations?: AgentConversationDetailMessageCitation[];
  /**
   * AI confidence in the answer. Present only on `bot_response` messages, and only when the model
   * emitted a trailing confidence block.
   *
   * This field is now optional and nullable; it was previously always present and non-nullable.
   * Treat a missing or `null` value as "no confidence reported" and guard before using it. Change
   * effective in SDK v1.3.0 (v1.2.0 and earlier always populated it).
   */
  confidence?: Confidence | null;
  followUpQuestions?: FollowUpQuestion[];
  feedback?: MessageFeedback[];
  /** Reference identifiers surfaced from tool responses, used to scope follow-up queries. */
  referenceData?: ReferenceDatum[];
  /**
   * Files uploaded for this message turn (see `POST
   * /agents/{agentKey}/conversations/attachments/upload`).
   */
  attachments?: ChatAttachmentRef[];
  /** Tool call results invoked during this message turn. */
  tools?: MessageToolCall[];
  /** Persisted chain-of-thought for this turn. */
  reasoning?: MessageReasoningTurn[];
  /** Ordered agent-activity transcript for this turn. */
  parts?: MessagePart[];
  /** AI model configuration recorded against a conversation or message. */
  modelInfo?: ConversationModelInfo;
  /**
   * Rich filter state selected by the user, used for display and persistence only. This mirrors the
   * active selection shown in the UI and is distinct from the machine-readable `filters` field used
   * for retrieval scoping.
   */
  appliedFilters?: AppliedFilters;
  metadata?: Metadata2;
  createdAt?: Date;
  updatedAt?: Date;
};

export const agentConversationDetailMessageSchema: Schema<AgentConversationDetailMessage> =
  s.object<AgentConversationDetailMessage>({
    id: s.optional(s.string()),
    messageType: s.optional(s.lazy(() => messageType1Schema)),
    content: s.optional(s.string()),
    contentFormat: s.optional(s.lazy(() => contentFormat1Schema)),
    citations: s.optional(s.array(s.lazy(() => agentConversationDetailMessageCitationSchema))),
    confidence: s.optionalNullable(s.lazy(() => confidenceSchema)),
    followUpQuestions: s.optional(s.array(s.lazy(() => followUpQuestionSchema))),
    feedback: s.optional(s.array(s.lazy(() => messageFeedbackSchema))),
    referenceData: s.optional(s.array(s.lazy(() => referenceDatumSchema))),
    attachments: s.optional(s.array(s.lazy(() => chatAttachmentRefSchema))),
    tools: s.optional(s.array(s.lazy(() => messageToolCallSchema))),
    reasoning: s.optional(s.array(s.lazy(() => messageReasoningTurnSchema))),
    parts: s.optional(s.array(s.lazy(() => messagePartSchema))),
    modelInfo: s.optional(s.lazy(() => conversationModelInfoSchema)),
    appliedFilters: s.optional(s.lazy(() => appliedFiltersSchema)),
    metadata: s.optional(s.lazy(() => metadata2Schema)),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      id: "_id",
    },
  });
