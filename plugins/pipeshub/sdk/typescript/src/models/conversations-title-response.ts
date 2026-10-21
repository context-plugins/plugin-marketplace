import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversation4Schema, type Conversation4 } from "./conversation4.js";
import { meta11Schema, type Meta11 } from "./meta11.js";

export type ConversationsTitleResponse = {
  /**
   * The conversation document after the title update, as stored in the `chatSessions` collection.
   *
   * Carries no `messages`: they live in `chatSessionMessages` (see `chat.session.schema.ts`) and
   * this route neither reads nor joins them. Fetch the conversation by id to get its messages.
   */
  conversation: Conversation4;
  meta: Meta11;
};

export const conversationsTitleResponseSchema: Schema<ConversationsTitleResponse> =
  s.object<ConversationsTitleResponse>({
    conversation: conversation4Schema,
    meta: meta11Schema,
  });
