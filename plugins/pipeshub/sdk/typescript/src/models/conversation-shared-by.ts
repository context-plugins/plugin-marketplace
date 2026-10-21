import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Present on conversations the caller received via share. Identifies the conversation initiator
 * (the only user who can share a chat).
 */
export type ConversationSharedBy = {
  userId: string;
  /** Display name, falling back to email or the user id */
  name: string;
};

export const conversationSharedBySchema: Schema<ConversationSharedBy> = s.object<ConversationSharedBy>({
  userId: s.string(),
  name: s.string(),
});
