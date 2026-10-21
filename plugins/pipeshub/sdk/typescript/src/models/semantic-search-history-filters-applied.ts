import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filters3Schema, type Filters3 } from "./filters3.js";
import { valuesSchema, type Values } from "./values.js";

/**
 * Echo of which filters the caller actually supplied, built by `buildFiltersMetadata`
 * (utils.ts:430-486). `page` and `limit` always appear because they are normalised to defaults
 * before being recorded, so `filters` is never empty and `values` always contains at least `{ page,
 * limit }`. Other keys appear only when the matching query param was non-empty (or, for
 * `dateRange`, when `createdAt` was set on the Mongo filter).
 *
 * `values` keys are scalar strings rather than typed primitives (`'true'`/`'false'`, `'5'`, etc.)
 * because they are passed through from `req.query` as Express parsed them — only `page` and `limit`
 * are coerced to integers via `safeParsePagination`.
 */
export type SemanticSearchHistoryFiltersApplied = {
  filters: Filters3[];
  values: Values;
};

export const semanticSearchHistoryFiltersAppliedSchema: Schema<SemanticSearchHistoryFiltersApplied> =
  s.object<SemanticSearchHistoryFiltersApplied>({
    filters: s.array(s.lazy(() => filters3Schema)),
    values: valuesSchema,
  });
