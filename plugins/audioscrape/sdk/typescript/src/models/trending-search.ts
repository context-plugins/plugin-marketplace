import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrendingSearch = {
  query: string;
  searchCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trendingSearchSchema: Schema<TrendingSearch> = s.object<TrendingSearch>(
  {
    query: s.string(),
    searchCount: s.int(),
    _keysMap: {
      searchCount: "search_count",
    },
  },
  { additionalProperties: s.json() },
);
