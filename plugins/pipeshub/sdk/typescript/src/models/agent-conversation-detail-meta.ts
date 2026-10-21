import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Request-scoped metadata returned by the by-id GET route. `requestId` is omitted when upstream
 * middleware did not attach one.
 */
export type AgentConversationDetailMeta = {
  requestId?: string;
  timestamp: Date;
  duration: number;
  conversationId: string;
  messageCount: number;
};

export const agentConversationDetailMetaSchema: Schema<AgentConversationDetailMeta> =
  s.object<AgentConversationDetailMeta>({
    requestId: s.optional(s.string()),
    timestamp: s.dateTime(),
    duration: s.int(),
    conversationId: s.string(),
    messageCount: s.int(),
  });
