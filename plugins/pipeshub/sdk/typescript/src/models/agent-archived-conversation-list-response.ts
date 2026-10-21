import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentArchivedConversationSummarySchema,
  type AgentArchivedConversationSummary,
} from "./agent-archived-conversation-summary.js";
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

/** Envelope returned by `GET /agents/{agentKey}/conversations/show/archives`. */
export type AgentArchivedConversationListResponse = {
  conversations: AgentConversationListItem[];
  /**
   * Pagination block emitted by `buildPaginationMetadata` (utils.ts:417). `totalPages` is
   * `Math.ceil(totalCount / limit)`, so an empty result has `totalPages: 0`, not `1`.
   */
  pagination: SemanticSearchHistoryPagination;
  filters: SemanticSearchHistoryFilters;
  /**
   * Archive counts and bounds for the current result page returned by `GET
   * /agents/{agentKey}/conversations/show/archives`.
   */
  summary: AgentArchivedConversationSummary;
  /**
   * `requestId` comes from `req.context?.requestId` and is omitted from the JSON when upstream
   * middleware did not set it.
   */
  meta: SemanticSearchHistoryMeta;
};

export const agentArchivedConversationListResponseSchema: Schema<AgentArchivedConversationListResponse> =
  s.object<AgentArchivedConversationListResponse>({
    conversations: s.array(s.lazy(() => agentConversationListItemSchema)),
    pagination: semanticSearchHistoryPaginationSchema,
    filters: semanticSearchHistoryFiltersSchema,
    summary: agentArchivedConversationSummarySchema,
    meta: semanticSearchHistoryMetaSchema,
  });
