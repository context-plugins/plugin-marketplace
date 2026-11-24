import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { trendingEntitySchema, type TrendingEntity } from "./trending-entity.js";
import { trendingSearchSchema, type TrendingSearch } from "./trending-search.js";

export type TrendingResponse = {
  trendingEntities: TrendingEntity[];
  trendingSearches: TrendingSearch[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trendingResponseSchema: Schema<TrendingResponse> = s.object<TrendingResponse>(
  {
    trendingEntities: s.array(s.lazy(() => trendingEntitySchema)),
    trendingSearches: s.array(s.lazy(() => trendingSearchSchema)),
    _keysMap: {
      trendingEntities: "trending_entities",
      trendingSearches: "trending_searches",
    },
  },
  { additionalProperties: s.json() },
);
