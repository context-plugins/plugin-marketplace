import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Pagination block returned by `GET /agents`. */
export type AgentListPagination = {
  /** Current 1-based page number. */
  currentPage: number;
  /** Page size actually applied by the backend. */
  limit: number;
  /** Total number of matching agents across all pages. */
  totalItems: number;
  /** Total number of pages for the current query. */
  totalPages: number;
  /** Whether a later page exists. */
  hasNext: boolean;
  /** Whether an earlier page exists. */
  hasPrev: boolean;
};

export const agentListPaginationSchema: Schema<AgentListPagination> = s.object<AgentListPagination>({
  currentPage: s.int(),
  limit: s.int(),
  totalItems: s.int(),
  totalPages: s.int(),
  hasNext: s.boolean(),
  hasPrev: s.boolean(),
});
