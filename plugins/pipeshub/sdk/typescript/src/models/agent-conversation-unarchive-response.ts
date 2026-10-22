import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentConversationUnarchiveMetaSchema,
  type AgentConversationUnarchiveMeta,
} from "./agent-conversation-unarchive-meta.js";

/** Envelope returned by `POST /agents/{agentKey}/conversations/{conversationId}/unarchive`. */
export type AgentConversationUnarchiveResponse = {
  id: string;
  /** @default "unarchived" */
  status?: "unarchived";
  unarchivedBy: string;
  unarchivedAt: Date;
  /**
   * Request-scoped metadata returned by the unarchive route. `requestId` is omitted when upstream
   * middleware did not attach one.
   */
  meta: AgentConversationUnarchiveMeta;
};

export const agentConversationUnarchiveResponseSchema: Schema<AgentConversationUnarchiveResponse> =
  s.object<AgentConversationUnarchiveResponse>({
    id: s.string(),
    status: s.defaulted(s.literal("unarchived"), "unarchived"),
    unarchivedBy: s.string(),
    unarchivedAt: s.dateTime(),
    meta: agentConversationUnarchiveMetaSchema,
  });
