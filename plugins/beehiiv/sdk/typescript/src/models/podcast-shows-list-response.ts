import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastShowSchema, type PodcastShow } from "./podcast-show.js";

export type PodcastShowsListResponse = {
  /** A list of podcasts for this publication. */
  data: PodcastShow[];
  /**
   * The limit placed on the results. If no limit was specified in the request, this defaults to 10.
   */
  limit: number;
  /** Indicates whether there are more results available after the current page. */
  hasMore: boolean;
  /** The cursor token to use for fetching the next page of results. Null when has_more is false. */
  nextCursor?: string;
  /** The total number of results from all pages. */
  totalResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastShowsListResponseSchema: Schema<PodcastShowsListResponse> =
  s.object<PodcastShowsListResponse>(
    {
      data: s.array(s.lazy(() => podcastShowSchema)),
      limit: s.int(),
      hasMore: s.boolean(),
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
