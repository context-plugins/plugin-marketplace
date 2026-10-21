import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appliedFiltersSchema, type AppliedFilters } from "./applied-filters.js";
import { chatAttachmentRefSchema, type ChatAttachmentRef } from "./chat-attachment-ref.js";
import { ContentFormat, contentFormatSchema } from "./content-format.js";
import { conversationModelInfoSchema, type ConversationModelInfo } from "./conversation-model-info.js";
import { followUpQuestionSchema, type FollowUpQuestion } from "./follow-up-question.js";
import { messageFeedbackSchema, type MessageFeedback } from "./message-feedback.js";
import { messagePartSchema, type MessagePart } from "./message-part.js";
import { messageReasoningTurnSchema, type MessageReasoningTurn } from "./message-reasoning-turn.js";
import { messageToolCallSchema, type MessageToolCall } from "./message-tool-call.js";
import { messageTypeSchema, type MessageType } from "./message-type.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";
import { referenceDatumSchema, type ReferenceDatum } from "./reference-datum.js";
import { citation2Schema, type Citation2 } from "./unions/citation2.js";

/**
 * A single message within a conversation. Messages can be user queries, AI responses, system
 * messages, or error notifications.
 */
export type Message = {
  /** Unique message identifier */
  id?: string;
  /**
   * Type of message:
   * - `user_query` - User's question or input
   * - `bot_response` - AI-generated response
   * - `error` - Error message from the system
   * - `feedback` - User feedback on a response
   * - `system` - System notification or status
   * - `tool_call` - Tool invocation turn; details are on `tools`
   */
  messageType?: MessageType;
  /** The message text content */
  content?: string;
  /** Format of the content for rendering @default ContentFormat.Markdown */
  contentFormat?: ContentFormat;
  /**
   * References to source documents used in the response. Routes that return the saved conversation
   * after a turn (create, add message) populate each item to `{ citationId, citationData }`.
   */
  citations?: Citation2[];
  /**
   * AI confidence in the answer. Present only on `bot_response` messages, and only when the model
   * emitted a trailing confidence block.
   *
   * This field is now optional and nullable; it was previously always present and non-nullable.
   * Treat a missing or `null` value as "no confidence reported" and guard before using it. Change
   * effective in SDK v1.3.0 (v1.2.0 and earlier always populated it).
   */
  confidence?: string | null;
  /** Suggested follow-up questions */
  followUpQuestions?: FollowUpQuestion[];
  /** User feedback on this message */
  feedback?: MessageFeedback[];
  metadata?: Metadata1;
  /** AI model configuration recorded against a conversation or message. */
  modelInfo?: ConversationModelInfo;
  /**
   * Rich filter state selected by the user, used for display and persistence only. This mirrors the
   * active selection shown in the UI and is distinct from the machine-readable `filters` field used
   * for retrieval scoping.
   */
  appliedFilters?: AppliedFilters;
  /**
   * Reference identifiers extracted from tool responses, used to scope follow-up queries (for
   * example Jira project keys or record IDs).
   */
  referenceData?: ReferenceDatum[];
  /** Files uploaded for this message turn (see `POST /conversations/attachments/upload`). */
  attachments?: ChatAttachmentRef[];
  /** Tool call results invoked during this message turn. */
  tools?: MessageToolCall[];
  /** Persisted chain-of-thought for this turn. */
  reasoning?: MessageReasoningTurn[];
  /** Ordered agent-activity transcript for this turn. */
  parts?: MessagePart[];
  createdAt?: Date;
  updatedAt?: Date;
};

export const messageSchema: Schema<Message> = s.object<Message>({
  id: s.optional(s.string()),
  messageType: s.optional(s.lazy(() => messageTypeSchema)),
  content: s.optional(s.string()),
  contentFormat: s.defaulted(contentFormatSchema, ContentFormat.Markdown),
  citations: s.optional(s.array(s.lazy(() => citation2Schema))),
  confidence: s.optionalNullable(s.string()),
  followUpQuestions: s.optional(s.array(s.lazy(() => followUpQuestionSchema))),
  feedback: s.optional(s.array(s.lazy(() => messageFeedbackSchema))),
  metadata: s.optional(s.lazy(() => metadata1Schema)),
  modelInfo: s.optional(s.lazy(() => conversationModelInfoSchema)),
  appliedFilters: s.optional(s.lazy(() => appliedFiltersSchema)),
  referenceData: s.optional(s.array(s.lazy(() => referenceDatumSchema))),
  attachments: s.optional(s.array(s.lazy(() => chatAttachmentRefSchema))),
  tools: s.optional(s.array(s.lazy(() => messageToolCallSchema))),
  reasoning: s.optional(s.array(s.lazy(() => messageReasoningTurnSchema))),
  parts: s.optional(s.array(s.lazy(() => messagePartSchema))),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    id: "_id",
  },
});
