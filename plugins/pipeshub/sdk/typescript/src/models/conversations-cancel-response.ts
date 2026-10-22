import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsCancelResponse = {
  cancelled?: boolean;
};

export const conversationsCancelResponseSchema: Schema<ConversationsCancelResponse> =
  s.object<ConversationsCancelResponse>({
    cancelled: s.optional(s.boolean()),
  });
