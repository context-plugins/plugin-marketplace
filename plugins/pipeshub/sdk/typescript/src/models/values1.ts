import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";

/**
 * Current value for each applied filter. Only keys present in `filters` are populated; others are
 * omitted.
 */
export type Values1 = {
  search?: string;
  shared?: string;
  tags?: string;
  minMessages?: string;
  sortBy?: string;
  sortOrder?: string;
  startDate?: string;
  endDate?: string;
  messageType?: string;
  page?: number;
  limit?: number;
  dateRange?: DateRange;
};

export const values1Schema: Schema<Values1> = s.object<Values1>({
  search: s.optional(s.string()),
  shared: s.optional(s.string()),
  tags: s.optional(s.string()),
  minMessages: s.optional(s.string()),
  sortBy: s.optional(s.string()),
  sortOrder: s.optional(s.string()),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  messageType: s.optional(s.string()),
  page: s.optional(s.int()),
  limit: s.optional(s.int()),
  dateRange: s.optional(s.lazy(() => dateRangeSchema)),
});
