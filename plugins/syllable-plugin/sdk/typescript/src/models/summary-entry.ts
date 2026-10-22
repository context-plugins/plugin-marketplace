import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latencyCategorySchema, type LatencyCategory } from "./latency-category.js";
import { subCategorySchema, type SubCategory } from "./unions/sub-category.js";

/**
 * A summary entry is an aggregation of latency entries by category and sub-category. It contains
 * the total and average latency for each category.
 */
export type SummaryEntry = {
  category: LatencyCategory;
  subCategory?: SubCategory;
  eventCount: number;
  sumMs: number;
  sumStr: string;
  averageMs: number;
  averageStr: string;
};

export const summaryEntrySchema: Schema<SummaryEntry> = s.object<SummaryEntry>({
  category: latencyCategorySchema,
  subCategory: s.optional(s.lazy(() => subCategorySchema)),
  eventCount: s.int(),
  sumMs: s.float64(),
  sumStr: s.string(),
  averageMs: s.float64(),
  averageStr: s.string(),
  _keysMap: {
    subCategory: "sub_category",
    eventCount: "event_count",
    sumMs: "sum_ms",
    sumStr: "sum_str",
    averageMs: "average_ms",
    averageStr: "average_str",
  },
});
