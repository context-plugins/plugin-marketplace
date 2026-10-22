import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversationSchema, type Conversation } from "./conversation.js";
import { meta2Schema, type Meta2 } from "./meta2.js";

/**
 * Envelope returned by `POST /conversations/{conversationId}/messages`. Contains the updated
 * conversation, the number of citation records used to ground the AI response for this turn, and
 * request metadata.
 */
export type AddMessageResponse = {
  /**
   * A conversation represents a chat session between a user and the AI. Conversations maintain
   * context across multiple messages and can be shared, archived, and organized.
   */
  conversation: Conversation;
  /** Number of citation records used to ground the AI response generated for this turn. */
  recordsUsed: number;
  meta: Meta2;
};

export const addMessageResponseSchema: Schema<AddMessageResponse> = s.object<AddMessageResponse>({
  conversation: conversationSchema,
  recordsUsed: s.int(),
  meta: meta2Schema,
});
