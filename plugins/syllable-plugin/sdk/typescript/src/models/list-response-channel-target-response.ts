import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelTargetResponseSchema, type ChannelTargetResponse } from "./channel-target-response.js";
import { totalCountSchema, type TotalCount } from "./unions/total-count.js";
import { totalPagesSchema, type TotalPages } from "./unions/total-pages.js";

export type ListResponseChannelTargetResponse = {
  /** List of items returned from the query */
  items: ChannelTargetResponse[];
  /** The page number of the results (0-based) */
  page: number;
  /** The number of items returned per page */
  pageSize: number;
  /** The total number of pages of results given the indicated page size */
  totalPages?: TotalPages;
  /** The total number of items returned from the query */
  totalCount?: TotalCount;
};

export const listResponseChannelTargetResponseSchema: Schema<ListResponseChannelTargetResponse> =
  s.object<ListResponseChannelTargetResponse>({
    items: s.array(s.lazy(() => channelTargetResponseSchema)),
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
