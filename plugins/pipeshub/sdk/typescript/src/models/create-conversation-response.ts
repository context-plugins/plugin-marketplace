import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversationSchema, type Conversation } from "./conversation.js";
import { meta1Schema, type Meta1 } from "./meta1.js";

/**
 * Envelope returned by `POST /conversations/create`. Contains the persisted conversation (including
 * the initial user message and the AI response) plus request metadata.
 */
export type CreateConversationResponse = {
  /**
   * A conversation represents a chat session between a user and the AI. Conversations maintain
   * context across multiple messages and can be shared, archived, and organized.
   */
  conversation: Conversation;
  meta: Meta1;
};

export const createConversationResponseSchema: Schema<CreateConversationResponse> =
  s.object<CreateConversationResponse>({
    conversation: conversationSchema,
    meta: meta1Schema,
  });
