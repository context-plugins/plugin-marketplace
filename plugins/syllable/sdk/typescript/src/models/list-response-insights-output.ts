import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsOutputSchema, type InsightsOutput } from "./insights-output.js";
import { totalCountSchema, type TotalCount } from "./unions/total-count.js";
import { totalPagesSchema, type TotalPages } from "./unions/total-pages.js";

export type ListResponseInsightsOutput = {
  /** List of items returned from the query */
  items: InsightsOutput[];
  /** The page number of the results (0-based) */
  page: number;
  /** The number of items returned per page */
  pageSize: number;
  /** The total number of pages of results given the indicated page size */
  totalPages?: TotalPages;
  /** The total number of items returned from the query */
  totalCount?: TotalCount;
};

export const listResponseInsightsOutputSchema: Schema<ListResponseInsightsOutput> =
  s.object<ListResponseInsightsOutput>({
    items: s.array(s.lazy(() => insightsOutputSchema)),
    page: s.int(),
    pageSize: s.int(),
    totalPages: s.optional(s.lazy(() => totalPagesSchema)),
    totalCount: s.optional(s.lazy(() => totalCountSchema)),
    _keysMap: {
      pageSize: "page_size",
      totalPages: "total_pages",
      totalCount: "total_count",
    },
  });
