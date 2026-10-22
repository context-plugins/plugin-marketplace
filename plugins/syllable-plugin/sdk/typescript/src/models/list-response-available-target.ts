import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availableTargetSchema, type AvailableTarget } from "./available-target.js";
import { totalCountSchema, type TotalCount } from "./unions/total-count.js";
import { totalPagesSchema, type TotalPages } from "./unions/total-pages.js";

export type ListResponseAvailableTarget = {
  /** List of items returned from the query */
  items: AvailableTarget[];
  /** The page number of the results (0-based) */
  page: number;
  /** The number of items returned per page */
  pageSize: number;
  /** The total number of pages of results given the indicated page size */
  totalPages?: TotalPages;
  /** The total number of items returned from the query */
  totalCount?: TotalCount;
};

export const listResponseAvailableTargetSchema: Schema<ListResponseAvailableTarget> =
  s.object<ListResponseAvailableTarget>({
    items: s.array(s.lazy(() => availableTargetSchema)),
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
