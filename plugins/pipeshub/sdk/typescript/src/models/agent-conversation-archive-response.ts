import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentConversationArchiveMetaSchema,
  type AgentConversationArchiveMeta,
} from "./agent-conversation-archive-meta.js";

/** Envelope returned by `POST /agents/{agentKey}/conversations/{conversationId}/archive`. */
export type AgentConversationArchiveResponse = {
  id: string;
  /** @default "archived" */
  status?: "archived";
  archivedBy: string;
  archivedAt: Date;
  /**
   * Request-scoped metadata returned by the archive route. `requestId` is omitted when upstream
   * middleware did not attach one.
   */
  meta: AgentConversationArchiveMeta;
};

export const agentConversationArchiveResponseSchema: Schema<AgentConversationArchiveResponse> =
  s.object<AgentConversationArchiveResponse>({
    id: s.string(),
    status: s.defaulted(s.literal("archived"), "archived"),
    archivedBy: s.string(),
    archivedAt: s.dateTime(),
    meta: agentConversationArchiveMetaSchema,
  });
