import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationTitleUpdateRequest = {
  /** New title for the conversation */
  title: string;
};

export const conversationTitleUpdateRequestSchema: Schema<ConversationTitleUpdateRequest> =
  s.object<ConversationTitleUpdateRequest>({
    title: s.string(),
  });
