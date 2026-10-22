import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchHistoryFilterToggleSchema,
  type SemanticSearchHistoryFilterToggle,
} from "./semantic-search-history-filter-toggle.js";

export type MessageFilters = {
  /**
   * Generic "filter X is available, current value is Y" block used for `shared`, `tags`,
   * `minMessages`, `search`, and `messageType`. Either `type` (free-form value) or `values` (enum
   * of allowed strings) is present, not both. `current` is the caller-supplied value passed through
   * from `req.query`, hence string-or-null even when `type` is `'number'`.
   */
  messageType: SemanticSearchHistoryFilterToggle;
};

export const messageFiltersSchema: Schema<MessageFilters> = s.object<MessageFilters>({
  messageType: semanticSearchHistoryFilterToggleSchema,
});
