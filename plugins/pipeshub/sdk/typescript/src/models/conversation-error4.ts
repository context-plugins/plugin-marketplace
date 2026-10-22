import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationError4 = {
  /** Sub-document identifier auto-assigned by MongoDB. */
  id: string;
  message: string;
  errorType?: string;
  /**
   * Time the error was recorded. Server-defaulted to `Date.now` when the entry is pushed, so always
   * present.
   */
  timestamp: Date;
  messageId?: string;
  stack?: string;
  /** Free-form metadata attached to this error entry (Map of Mixed in the schema). */
  metadata?: Record<string, unknown>;
};

export const conversationError4Schema: Schema<ConversationError4> = s.object<ConversationError4>({
  id: s.string(),
  message: s.string(),
  errorType: s.optional(s.string()),
  timestamp: s.dateTime(),
  messageId: s.optional(s.string()),
  stack: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    id: "_id",
  },
});
