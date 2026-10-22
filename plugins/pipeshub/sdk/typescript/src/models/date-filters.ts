import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchHistoryDateRangeSchema,
  type SemanticSearchHistoryDateRange,
} from "./semantic-search-history-date-range.js";

export type DateFilters = {
  dateRange: SemanticSearchHistoryDateRange;
};

export const dateFiltersSchema: Schema<DateFilters> = s.object<DateFilters>({
  dateRange: semanticSearchHistoryDateRangeSchema,
});
