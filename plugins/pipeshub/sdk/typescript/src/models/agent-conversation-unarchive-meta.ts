import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Request-scoped metadata returned by the unarchive route. `requestId` is omitted when upstream
 * middleware did not attach one.
 */
export type AgentConversationUnarchiveMeta = {
  requestId?: string;
  timestamp: Date;
  duration: number;
};

export const agentConversationUnarchiveMetaSchema: Schema<AgentConversationUnarchiveMeta> =
  s.object<AgentConversationUnarchiveMeta>({
    requestId: s.optional(s.string()),
    timestamp: s.dateTime(),
    duration: s.int(),
  });
