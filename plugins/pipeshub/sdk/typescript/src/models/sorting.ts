import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchHistorySortFieldSchema,
  type SemanticSearchHistorySortField,
} from "./semantic-search-history-sort-field.js";

export type Sorting = {
  /**
   * Used for `available.sorting.{sortBy,sortOrder}` and
   * `available.sortingMessages.{sortBy,sortOrder}`. The `applied` flag is present on `sorting.*`
   * and absent on `sortingMessages.*`, so it is optional here.
   */
  sortBy: SemanticSearchHistorySortField;
  /**
   * Used for `available.sorting.{sortBy,sortOrder}` and
   * `available.sortingMessages.{sortBy,sortOrder}`. The `applied` flag is present on `sorting.*`
   * and absent on `sortingMessages.*`, so it is optional here.
   */
  sortOrder: SemanticSearchHistorySortField;
};

export const sortingSchema: Schema<Sorting> = s.object<Sorting>({
  sortBy: semanticSearchHistorySortFieldSchema,
  sortOrder: semanticSearchHistorySortFieldSchema,
});
