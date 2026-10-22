import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dataSourceMetadataResponseSchema,
  type DataSourceMetadataResponse,
} from "./data-source-metadata-response.js";
import { totalCountSchema, type TotalCount } from "./unions/total-count.js";
import { totalPagesSchema, type TotalPages } from "./unions/total-pages.js";

export type ListResponseDataSourceMetadataResponse = {
  /** List of items returned from the query */
  items: DataSourceMetadataResponse[];
  /** The page number of the results (0-based) */
  page: number;
  /** The number of items returned per page */
  pageSize: number;
  /** The total number of pages of results given the indicated page size */
  totalPages?: TotalPages;
  /** The total number of items returned from the query */
  totalCount?: TotalCount;
};

export const listResponseDataSourceMetadataResponseSchema: Schema<ListResponseDataSourceMetadataResponse> =
  s.object<ListResponseDataSourceMetadataResponse>({
    items: s.array(s.lazy(() => dataSourceMetadataResponseSchema)),
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
