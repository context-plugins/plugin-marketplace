import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationEmailSchema, type AutomationEmail } from "./automation-email.js";

export type AutomationEmailsListResponse = {
  data: AutomationEmail[];
  /**
   * The limit placed on the results. If no limit was specified in the request, this defaults to 10.
   */
  limit?: number;
  /**
   * **Cursor pagination only**: Indicates whether there are more results available after the
   * current page.
   */
  hasMore?: boolean;
  /**
   * **Cursor pagination only**: The cursor token to use for fetching the next page of results. This
   * will be null if has_more is false.
   */
  nextCursor?: string;
  /**
   * **Offset pagination only**: The page number the results are from. Only present when using
   * deprecated offset-based pagination.
   *
   * @default 1
   */
  page?: number;
  /** The total number of results from all pages. */
  totalResults?: number;
  /** The total number of pages. */
  totalPages?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationEmailsListResponseSchema: Schema<AutomationEmailsListResponse> =
  s.object<AutomationEmailsListResponse>(
    {
      data: s.array(s.lazy(() => automationEmailSchema)),
      limit: s.optional(s.int()),
      hasMore: s.optional(s.boolean()),
      nextCursor: s.optional(s.string()),
      page: s.defaulted(s.int(), 1),
      totalResults: s.optional(s.int()),
      totalPages: s.optional(s.int()),
      _keysMap: {
        hasMore: "has_more",
        nextCursor: "next_cursor",
        totalResults: "total_results",
        totalPages: "total_pages",
      },
    },
    { additionalProperties: s.json() },
  );
