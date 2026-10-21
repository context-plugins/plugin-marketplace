import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentArchivedConversationGroupSchema,
  type AgentArchivedConversationGroup,
} from "./agent-archived-conversation-group.js";
import { requestMetaSchema, type RequestMeta } from "./request-meta.js";
import {
  semanticSearchHistoryPaginationSchema,
  type SemanticSearchHistoryPagination,
} from "./semantic-search-history-pagination.js";

/**
 * Response from `GET /agents/conversations/show/archives` — archived agent conversations grouped by
 * `agentKey`, with agent-level pagination over the groups and a fixed slice of conversations under
 * each agent.
 */
export type AgentArchivedGroupsResponse = {
  groups: AgentArchivedConversationGroup[];
  /**
   * Pagination block emitted by `buildPaginationMetadata` (utils.ts:417). `totalPages` is
   * `Math.ceil(totalCount / limit)`, so an empty result has `totalPages: 0`, not `1`.
   */
  agentPagination: SemanticSearchHistoryPagination;
  /** Basic request metadata returned by the API. */
  meta: RequestMeta;
};

export const agentArchivedGroupsResponseSchema: Schema<AgentArchivedGroupsResponse> =
  s.object<AgentArchivedGroupsResponse>({
    groups: s.array(s.lazy(() => agentArchivedConversationGroupSchema)),
    agentPagination: semanticSearchHistoryPaginationSchema,
    meta: requestMetaSchema,
  });
