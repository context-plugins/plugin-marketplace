import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateFiltersSchema, type DateFilters } from "./date-filters.js";
import { messageFiltersSchema, type MessageFilters } from "./message-filters.js";
import { pagination5Schema, type Pagination5 } from "./pagination5.js";
import {
  semanticSearchHistoryFilterToggleSchema,
  type SemanticSearchHistoryFilterToggle,
} from "./semantic-search-history-filter-toggle.js";
import { sortingMessagesSchema, type SortingMessages } from "./sorting-messages.js";
import { sortingSchema, type Sorting } from "./sorting.js";

/**
 * Catalogue of filters the endpoint supports, plus their current values and `applied` flags. Built
 * by `buildFiltersMetadata` (utils.ts:430-624).
 */
export type SemanticSearchHistoryFiltersAvailable = {
  /**
   * Generic "filter X is available, current value is Y" block used for `shared`, `tags`,
   * `minMessages`, `search`, and `messageType`. Either `type` (free-form value) or `values` (enum
   * of allowed strings) is present, not both. `current` is the caller-supplied value passed through
   * from `req.query`, hence string-or-null even when `type` is `'number'`.
   */
  shared: SemanticSearchHistoryFilterToggle;
  /**
   * Generic "filter X is available, current value is Y" block used for `shared`, `tags`,
   * `minMessages`, `search`, and `messageType`. Either `type` (free-form value) or `values` (enum
   * of allowed strings) is present, not both. `current` is the caller-supplied value passed through
   * from `req.query`, hence string-or-null even when `type` is `'number'`.
   */
  tags: SemanticSearchHistoryFilterToggle;
  /**
   * Generic "filter X is available, current value is Y" block used for `shared`, `tags`,
   * `minMessages`, `search`, and `messageType`. Either `type` (free-form value) or `values` (enum
   * of allowed strings) is present, not both. `current` is the caller-supplied value passed through
   * from `req.query`, hence string-or-null even when `type` is `'number'`.
   */
  minMessages: SemanticSearchHistoryFilterToggle;
  /**
   * Generic "filter X is available, current value is Y" block used for `shared`, `tags`,
   * `minMessages`, `search`, and `messageType`. Either `type` (free-form value) or `values` (enum
   * of allowed strings) is present, not both. `current` is the caller-supplied value passed through
   * from `req.query`, hence string-or-null even when `type` is `'number'`.
   */
  search: SemanticSearchHistoryFilterToggle;
  pagination: Pagination5;
  sorting: Sorting;
  dateFilters: DateFilters;
  messageFilters: MessageFilters;
  sortingMessages: SortingMessages;
};

export const semanticSearchHistoryFiltersAvailableSchema: Schema<SemanticSearchHistoryFiltersAvailable> =
  s.object<SemanticSearchHistoryFiltersAvailable>({
    shared: semanticSearchHistoryFilterToggleSchema,
    tags: semanticSearchHistoryFilterToggleSchema,
    minMessages: semanticSearchHistoryFilterToggleSchema,
    search: semanticSearchHistoryFilterToggleSchema,
    pagination: pagination5Schema,
    sorting: sortingSchema,
    dateFilters: dateFiltersSchema,
    messageFilters: messageFiltersSchema,
    sortingMessages: sortingMessagesSchema,
  });
