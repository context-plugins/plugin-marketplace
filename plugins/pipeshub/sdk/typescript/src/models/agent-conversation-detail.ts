import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentConversationDetailAccessSchema,
  type AgentConversationDetailAccess,
} from "./agent-conversation-detail-access.js";
import {
  agentConversationDetailMessageSchema,
  type AgentConversationDetailMessage,
} from "./agent-conversation-detail-message.js";
import {
  agentConversationDetailPaginationSchema,
  type AgentConversationDetailPagination,
} from "./agent-conversation-detail-pagination.js";
import { conversationModelInfoSchema, type ConversationModelInfo } from "./conversation-model-info.js";
import { sharedWithSchema, type SharedWith } from "./shared-with.js";
import { status4Schema, type Status4 } from "./status4.js";

/**
 * Reduced conversation view returned by the by-id GET route. This is not the raw
 * `AgentConversation` document shape: fields like `agentKey`, `userId`, `orgId`,
 * `conversationSource`, and root-level `messages` metadata outside the selected slice are omitted.
 */
export type AgentConversationDetail = {
  id: string;
  title?: string;
  initiator?: string;
  createdAt: Date;
  isShared: boolean;
  sharedWith: SharedWith[];
  status?: Status4;
  failReason?: string;
  messages: AgentConversationDetailMessage[];
  /** AI model configuration recorded against a conversation or message. */
  modelInfo?: ConversationModelInfo;
  /**
   * Message pagination returned inside the `conversation` object. The handler paginates backwards
   * from the end of the stored message array, then sorts the selected page in memory before
   * serialization.
   */
  pagination: AgentConversationDetailPagination;
  access: AgentConversationDetailAccess;
};

export const agentConversationDetailSchema: Schema<AgentConversationDetail> =
  s.object<AgentConversationDetail>({
    id: s.string(),
    title: s.optional(s.string()),
    initiator: s.optional(s.string()),
    createdAt: s.dateTime(),
    isShared: s.boolean(),
    sharedWith: s.array(s.lazy(() => sharedWithSchema)),
    status: s.optional(s.lazy(() => status4Schema)),
    failReason: s.optional(s.string()),
    messages: s.array(s.lazy(() => agentConversationDetailMessageSchema)),
    modelInfo: s.optional(s.lazy(() => conversationModelInfoSchema)),
    pagination: agentConversationDetailPaginationSchema,
    access: agentConversationDetailAccessSchema,
  });
