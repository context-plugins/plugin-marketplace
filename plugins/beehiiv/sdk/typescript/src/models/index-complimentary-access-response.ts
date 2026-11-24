import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { complimentaryAccessSchema, type ComplimentaryAccess } from "./complimentary-access.js";

export type IndexComplimentaryAccessResponse = {
  data: ComplimentaryAccess[];
  /** The limit placed on the results. Defaults to 10 if not specified. */
  limit?: number;
  /** Indicates whether there are more results available after the current page. */
  hasMore?: boolean;
  /**
   * The cursor token to use for fetching the next page of results. This will be null if has_more is
   * false.
   */
  nextCursor?: string;
  /** The total number of results from all pages. */
  totalResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexComplimentaryAccessResponseSchema: Schema<IndexComplimentaryAccessResponse> =
  s.object<IndexComplimentaryAccessResponse>(
    {
      data: s.array(s.lazy(() => complimentaryAccessSchema)),
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
