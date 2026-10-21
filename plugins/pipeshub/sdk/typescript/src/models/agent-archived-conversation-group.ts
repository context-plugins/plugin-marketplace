import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentConversationListItemSchema,
  type AgentConversationListItem,
} from "./agent-conversation-list-item.js";
import {
  semanticSearchHistoryPaginationSchema,
  type SemanticSearchHistoryPagination,
} from "./semantic-search-history-pagination.js";

/**
 * Archived conversations for a single agent, sliced to the first page of the per-agent archive
 * query (limit 5, sorted newest first).
 */
export type AgentArchivedConversationGroup = {
  /** Agent identifier the conversations belong to. */
  agentKey: string;
  conversations: AgentConversationListItem[];
  /**
   * Pagination block emitted by `buildPaginationMetadata` (utils.ts:417). `totalPages` is
   * `Math.ceil(totalCount / limit)`, so an empty result has `totalPages: 0`, not `1`.
   */
  pagination: SemanticSearchHistoryPagination;
};

export const agentArchivedConversationGroupSchema: Schema<AgentArchivedConversationGroup> =
  s.object<AgentArchivedConversationGroup>({
    agentKey: s.string(),
    conversations: s.array(s.lazy(() => agentConversationListItemSchema)),
    pagination: semanticSearchHistoryPaginationSchema,
  });
