import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pollSchema, type Poll } from "./poll.js";

export type PollsListResponse = {
  /** An array of polls. */
  data: Poll[];
  /**
   * The limit placed on the results. If no limit was specified in the request, this defaults to 10.
   */
  limit?: number;
  /**
   * **Offset pagination only**: The page number the results are from. Only present when using
   * deprecated offset-based pagination.
   *
   * @default 1
   */
  page?: number;
  /**
   * **Offset pagination only**: The total number of pages. Only present when using deprecated
   * offset-based pagination.
   */
  totalPages?: number;
  /**
   * **Cursor pagination only**: Indicates whether there are more results available after the
   * current page. Only present when using cursor-based pagination.
   */
  hasMore?: boolean;
  /**
   * **Cursor pagination only**: The cursor token to use for fetching the next page of results. This
   * will be null if has_more is false. Only present when using cursor-based pagination.
   */
  nextCursor?: string;
  /** The total number of results from all pages. */
  totalResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollsListResponseSchema: Schema<PollsListResponse> = s.object<PollsListResponse>(
  {
    data: s.array(s.lazy(() => pollSchema)),
    limit: s.optional(s.int()),
    page: s.defaulted(s.int(), 1),
    totalPages: s.optional(s.int()),
    hasMore: s.optional(s.boolean()),
    nextCursor: s.optional(s.string()),
    totalResults: s.optional(s.int()),
    _keysMap: {
      totalPages: "total_pages",
      hasMore: "has_more",
      nextCursor: "next_cursor",
      totalResults: "total_results",
    },
  },
  { additionalProperties: s.json() },
);
