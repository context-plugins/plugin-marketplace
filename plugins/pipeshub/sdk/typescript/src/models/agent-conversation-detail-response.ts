import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentConversationDetailMetaSchema,
  type AgentConversationDetailMeta,
} from "./agent-conversation-detail-meta.js";
import { agentConversationDetailSchema, type AgentConversationDetail } from "./agent-conversation-detail.js";
import {
  semanticSearchHistoryFiltersSchema,
  type SemanticSearchHistoryFilters,
} from "./semantic-search-history-filters.js";

/** Envelope returned by `GET /agents/{agentKey}/conversations/{conversationId}`. */
export type AgentConversationDetailResponse = {
  /**
   * Reduced conversation view returned by the by-id GET route. This is not the raw
   * `AgentConversation` document shape: fields like `agentKey`, `userId`, `orgId`,
   * `conversationSource`, and root-level `messages` metadata outside the selected slice are
   * omitted.
   */
  conversation: AgentConversationDetail;
  filters: SemanticSearchHistoryFilters;
  /**
   * Request-scoped metadata returned by the by-id GET route. `requestId` is omitted when upstream
   * middleware did not attach one.
   */
  meta: AgentConversationDetailMeta;
};

export const agentConversationDetailResponseSchema: Schema<AgentConversationDetailResponse> =
  s.object<AgentConversationDetailResponse>({
    conversation: agentConversationDetailSchema,
    filters: semanticSearchHistoryFiltersSchema,
    meta: agentConversationDetailMetaSchema,
  });
