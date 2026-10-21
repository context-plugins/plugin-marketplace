import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta9 = {
  requestId?: string;
  timestamp?: Date;
  /** Server processing time in milliseconds */
  duration?: number;
  conversationId?: string;
  /** Total number of messages in the conversation */
  messageCount?: number;
};

export const meta9Schema: Schema<Meta9> = s.object<Meta9>({
  requestId: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  duration: s.optional(s.int()),
  conversationId: s.optional(s.string()),
  messageCount: s.optional(s.int()),
});
