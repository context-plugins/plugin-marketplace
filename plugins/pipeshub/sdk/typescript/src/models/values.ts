import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchHistoryAppliedDateRangeSchema,
  type SemanticSearchHistoryAppliedDateRange,
} from "./semantic-search-history-applied-date-range.js";

export type Values = {
  page?: number;
  limit?: number;
  search?: string;
  shared?: string;
  tags?: string;
  minMessages?: string;
  sortBy?: string;
  sortOrder?: string;
  startDate?: string;
  endDate?: string;
  messageType?: string;
  /**
   * Echoed back only when the caller passed `startDate` and/or `endDate`. Each bound is an ISO 8601
   * string when set; the field is absent when the corresponding query param was omitted
   * (utils.ts:480-486 reads `appliedFilters.createdAt.$gte?.toISOString()` directly, so missing
   * bounds become `undefined` and drop out of the JSON).
   */
  dateRange?: SemanticSearchHistoryAppliedDateRange;
};

export const valuesSchema: Schema<Values> = s.object<Values>({
  page: s.optional(s.int()),
  limit: s.optional(s.int()),
  search: s.optional(s.string()),
  shared: s.optional(s.string()),
  tags: s.optional(s.string()),
  minMessages: s.optional(s.string()),
  sortBy: s.optional(s.string()),
  sortOrder: s.optional(s.string()),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  messageType: s.optional(s.string()),
  dateRange: s.optional(s.lazy(() => semanticSearchHistoryAppliedDateRangeSchema)),
});
