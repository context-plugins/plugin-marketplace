import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchHistoryFiltersSchema,
  type SemanticSearchHistoryFilters,
} from "./semantic-search-history-filters.js";
import {
  semanticSearchHistoryItemSchema,
  type SemanticSearchHistoryItem,
} from "./semantic-search-history-item.js";
import {
  semanticSearchHistoryMetaSchema,
  type SemanticSearchHistoryMeta,
} from "./semantic-search-history-meta.js";
import {
  semanticSearchHistoryPaginationSchema,
  type SemanticSearchHistoryPagination,
} from "./semantic-search-history-pagination.js";

/**
 * Envelope returned by `GET /search`. The handler runs `find()` plus `countDocuments()` in parallel
 * and assembles `{ searchHistory, pagination, filters, meta }` (es_controller.ts:3925-3973).
 */
export type SemanticSearchHistoryResponse = {
  searchHistory: SemanticSearchHistoryItem[];
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

export const semanticSearchHistoryResponseSchema: Schema<SemanticSearchHistoryResponse> =
  s.object<SemanticSearchHistoryResponse>({
    searchHistory: s.array(s.lazy(() => semanticSearchHistoryItemSchema)),
    pagination: semanticSearchHistoryPaginationSchema,
    filters: semanticSearchHistoryFiltersSchema,
    meta: semanticSearchHistoryMetaSchema,
  });
