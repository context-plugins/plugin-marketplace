import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Used for `available.sorting.{sortBy,sortOrder}` and
 * `available.sortingMessages.{sortBy,sortOrder}`. The `applied` flag is present on `sorting.*` and
 * absent on `sortingMessages.*`, so it is optional here.
 */
export type SemanticSearchHistorySortField = {
  values: string[];
  default: string;
  description: string;
  current: string;
  applied?: boolean;
};

export const semanticSearchHistorySortFieldSchema: Schema<SemanticSearchHistorySortField> =
  s.object<SemanticSearchHistorySortField>({
    values: s.array(s.string()),
    default: s.string(),
    description: s.string(),
    current: s.string(),
    applied: s.optional(s.boolean()),
  });
