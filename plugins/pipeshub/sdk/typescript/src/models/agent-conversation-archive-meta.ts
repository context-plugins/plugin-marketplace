import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Request-scoped metadata returned by the archive route. `requestId` is omitted when upstream
 * middleware did not attach one.
 */
export type AgentConversationArchiveMeta = {
  requestId?: string;
  timestamp: Date;
  duration: number;
};

export const agentConversationArchiveMetaSchema: Schema<AgentConversationArchiveMeta> =
  s.object<AgentConversationArchiveMeta>({
    requestId: s.optional(s.string()),
    timestamp: s.dateTime(),
    duration: s.int(),
  });
