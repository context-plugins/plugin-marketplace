import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentConversationListItemSchema,
  type AgentConversationListItem,
} from "./agent-conversation-list-item.js";
import {
  semanticSearchHistoryFiltersSchema,
  type SemanticSearchHistoryFilters,
} from "./semantic-search-history-filters.js";
import {
  semanticSearchHistoryMetaSchema,
  type SemanticSearchHistoryMeta,
} from "./semantic-search-history-meta.js";
import {
  semanticSearchHistoryPaginationSchema,
  type SemanticSearchHistoryPagination,
} from "./semantic-search-history-pagination.js";

/**
 * Envelope returned by `GET /agents/{agentKey}/conversations`. `conversations` contains rows owned
 * by the caller for the agent; `sharedWithMeConversations` contains rows shared with the caller for
 * the same agent. Both arrays use the same pagination and sort inputs, but `pagination.totalCount`
 * and `totalPages` are computed only from `conversations` because the handler counts the
 * owned-query filter only.
 */
export type AgentConversationListResponse = {
  conversations: AgentConversationListItem[];
  sharedWithMeConversations: AgentConversationListItem[];
  /**
   * Pagination block emitted by `buildPaginationMetadata` (utils.ts:417). `totalPages` is
   * `Math.ceil(totalCount / limit)`, so an empty result has `totalPages: 0`, not `1`.
   */
  pagination: SemanticSearchHistoryPagination;
  filters: SemanticSearchHistoryFilters;
  /**
   * `requestId` comes from `req.context?.requestId` and is omitted from the JSON when upstream
   * middleware did not set it.
   */
  meta: SemanticSearchHistoryMeta;
};

export const agentConversationListResponseSchema: Schema<AgentConversationListResponse> =
  s.object<AgentConversationListResponse>({
    conversations: s.array(s.lazy(() => agentConversationListItemSchema)),
    sharedWithMeConversations: s.array(s.lazy(() => agentConversationListItemSchema)),
    pagination: semanticSearchHistoryPaginationSchema,
    filters: semanticSearchHistoryFiltersSchema,
    meta: semanticSearchHistoryMetaSchema,
  });
