import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newsletterListSubscriptionInfoSchema,
  type NewsletterListSubscriptionInfo,
} from "./newsletter-list-subscription-info.js";

export type NewsletterListSubscriptionIndexResponse = {
  data: NewsletterListSubscriptionInfo[];
  /**
   * The limit placed on the results. If no limit was specified in the request, this defaults to 10.
   */
  limit?: number;
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

export const newsletterListSubscriptionIndexResponseSchema: Schema<NewsletterListSubscriptionIndexResponse> =
  s.object<NewsletterListSubscriptionIndexResponse>(
    {
      data: s.array(s.lazy(() => newsletterListSubscriptionInfoSchema)),
      limit: s.optional(s.int()),
      hasMore: s.optional(s.boolean()),
      nextCursor: s.optional(s.string()),
      totalResults: s.optional(s.int()),
      _keysMap: {
        hasMore: "has_more",
        nextCursor: "next_cursor",
        totalResults: "total_results",
      },
    },
    { additionalProperties: s.json() },
  );
