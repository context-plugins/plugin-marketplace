import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Echoed back only when the caller passed `startDate` and/or `endDate`. Each bound is an ISO 8601
 * string when set; the field is absent when the corresponding query param was omitted
 * (utils.ts:480-486 reads `appliedFilters.createdAt.$gte?.toISOString()` directly, so missing
 * bounds become `undefined` and drop out of the JSON).
 */
export type SemanticSearchHistoryAppliedDateRange = {
  start?: Date;
  end?: Date;
};

export const semanticSearchHistoryAppliedDateRangeSchema: Schema<SemanticSearchHistoryAppliedDateRange> =
  s.object<SemanticSearchHistoryAppliedDateRange>({
    start: s.optional(s.dateTime()),
    end: s.optional(s.dateTime()),
  });
