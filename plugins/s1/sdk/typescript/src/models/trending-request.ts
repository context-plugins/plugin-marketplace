import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrendingRequest = {
  searchService: string;
  maxResults?: number;
};

const trendingRequestProperties: s.Shape<TrendingRequest> = {
  searchService: s.string(),
  maxResults: s.optional(s.int()),
  _keysMap: {
    searchService: "search_service",
    maxResults: "max_results",
  },
};

export const trendingRequestInternalSchema: Schema<TrendingRequest> =
  s.object<TrendingRequest>(trendingRequestProperties);

export const trendingRequestSchema: Schema<TrendingRequest> = s.lazySchema(() =>
  s.object<TrendingRequest>({
    ...trendingRequestProperties,
    searchService: s.string().check(s.minLength(1)),
    maxResults: s.optional(s.int().check(s.gte(1))),
  }),
);
