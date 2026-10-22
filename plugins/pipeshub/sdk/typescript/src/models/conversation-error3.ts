import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationError3 = {
  id?: string;
  message?: string;
  errorType?: string;
  timestamp?: Date;
  messageId?: string;
  stack?: string;
  metadata?: Record<string, unknown>;
};

export const conversationError3Schema: Schema<ConversationError3> = s.object<ConversationError3>({
  id: s.optional(s.string()),
  message: s.optional(s.string()),
  errorType: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  messageId: s.optional(s.string()),
  stack: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    id: "_id",
  },
});
