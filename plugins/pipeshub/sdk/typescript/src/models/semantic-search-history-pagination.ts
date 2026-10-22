import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Pagination block emitted by `buildPaginationMetadata` (utils.ts:417). `totalPages` is
 * `Math.ceil(totalCount / limit)`, so an empty result has `totalPages: 0`, not `1`.
 */
export type SemanticSearchHistoryPagination = {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export const semanticSearchHistoryPaginationSchema: Schema<SemanticSearchHistoryPagination> =
  s.object<SemanticSearchHistoryPagination>({
    page: s.int(),
    limit: s.int(),
    totalCount: s.int(),
    totalPages: s.int(),
    hasNextPage: s.boolean(),
    hasPrevPage: s.boolean(),
  });
