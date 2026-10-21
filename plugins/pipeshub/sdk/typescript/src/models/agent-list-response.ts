import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentListItemSchema, type AgentListItem } from "./agent-list-item.js";
import { agentListPaginationSchema, type AgentListPagination } from "./agent-list-pagination.js";

/**
 * Paginated response returned by `GET /agents`.
 *
 * The Node gateway forwards the Python backend response on success. If the backend returns a
 * non-200 response, the gateway still returns HTTP 200 with `success: true`, an empty `agents`
 * array, and a zeroed pagination block derived from the requested `page` / `limit`.
 */
export type AgentListResponse = {
  success: boolean;
  agents: AgentListItem[];
  /** Pagination block returned by `GET /agents`. */
  pagination: AgentListPagination;
};

export const agentListResponseSchema: Schema<AgentListResponse> = s.object<AgentListResponse>({
  success: s.boolean(),
  agents: s.array(s.lazy(() => agentListItemSchema)),
  pagination: agentListPaginationSchema,
});
