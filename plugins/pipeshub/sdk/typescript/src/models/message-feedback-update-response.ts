import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messageFeedbackAppendEntrySchema,
  type MessageFeedbackAppendEntry,
} from "./message-feedback-append-entry.js";
import { meta3Schema, type Meta3 } from "./meta3.js";

/** Gateway response after appending feedback to a bot-response message. */
export type MessageFeedbackUpdateResponse = {
  /** Conversation the feedback was attached to. */
  conversationId: string;
  /** Message the feedback was attached to. */
  messageId: string;
  /**
   * The feedback entry just appended to the message. Echoes the fields supplied in the request plus
   * server-stamped `feedbackProvider`, `timestamp`, and `metrics`.
   */
  feedback: MessageFeedbackAppendEntry;
  meta: Meta3;
};

export const messageFeedbackUpdateResponseSchema: Schema<MessageFeedbackUpdateResponse> =
  s.object<MessageFeedbackUpdateResponse>({
    conversationId: s.string(),
    messageId: s.string(),
    feedback: messageFeedbackAppendEntrySchema,
    meta: meta3Schema,
  });
