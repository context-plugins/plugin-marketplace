import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchHistoryFiltersAppliedSchema,
  type SemanticSearchHistoryFiltersApplied,
} from "./semantic-search-history-filters-applied.js";
import {
  semanticSearchHistoryFiltersAvailableSchema,
  type SemanticSearchHistoryFiltersAvailable,
} from "./semantic-search-history-filters-available.js";

export type SemanticSearchHistoryFilters = {
  /**
   * Echo of which filters the caller actually supplied, built by `buildFiltersMetadata`
   * (utils.ts:430-486). `page` and `limit` always appear because they are normalised to defaults
   * before being recorded, so `filters` is never empty and `values` always contains at least `{
   * page, limit }`. Other keys appear only when the matching query param was non-empty (or, for
   * `dateRange`, when `createdAt` was set on the Mongo filter).
   *
   * `values` keys are scalar strings rather than typed primitives (`'true'`/`'false'`, `'5'`, etc.)
   * because they are passed through from `req.query` as Express parsed them — only `page` and
   * `limit` are coerced to integers via `safeParsePagination`.
   */
  applied: SemanticSearchHistoryFiltersApplied;
  /**
   * Catalogue of filters the endpoint supports, plus their current values and `applied` flags.
   * Built by `buildFiltersMetadata` (utils.ts:430-624).
   */
  available: SemanticSearchHistoryFiltersAvailable;
};

export const semanticSearchHistoryFiltersSchema: Schema<SemanticSearchHistoryFilters> =
  s.object<SemanticSearchHistoryFilters>({
    applied: semanticSearchHistoryFiltersAppliedSchema,
    available: semanticSearchHistoryFiltersAvailableSchema,
  });
