import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationError1 = {
  message?: string;
  errorType?: string;
  timestamp?: Date;
  messageId?: string;
  stack?: string;
  metadata?: Record<string, unknown>;
};

export const conversationError1Schema: Schema<ConversationError1> = s.object<ConversationError1>({
  message: s.optional(s.string()),
  errorType: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  messageId: s.optional(s.string()),
  stack: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
});
