import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feedResultSchema, type FeedResult } from "./feed-result.js";

export type FeedResponse = {
  /** List of experiment ids for the corresponding request. */
  experimentIds?: number[];
  /** An opaque token that represents this particular feed response. */
  trackingToken?: string;
  /** Server unix timestamp (in seconds since epoch UTC). */
  serverTimestamp: number;
  results?: FeedResult[];
  /** Map from category to the list of facets that can be used to filter the entry's content. */
  facetResults?: Record<string, Record<string, unknown>>;
  /** The time window (in hours) used for generating user mentions. */
  mentionsTimeWindowInHours?: number;
};

export const feedResponseSchema: Schema<FeedResponse> = s.object<FeedResponse>({
  experimentIds: s.optional(s.array(s.int())),
  trackingToken: s.optional(s.string()),
  serverTimestamp: s.int(),
  results: s.optional(s.array(s.lazy(() => feedResultSchema))),
  facetResults: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  mentionsTimeWindowInHours: s.optional(s.int()),
});
