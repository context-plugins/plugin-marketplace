import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchMetaInternalSchema, searchMetaSchema, type SearchMeta } from "./search-meta.js";
import { searchResultSchema, type SearchResult } from "./search-result.js";

/** API v1 Search Response - clean, stable structure */
export type SearchResponse = {
  meta: SearchMeta;
  results: SearchResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchResponseProperties: s.Shape<SearchResponse> = {
  meta: searchMetaInternalSchema,
  results: s.array(s.lazy(() => searchResultSchema)),
};

export const searchResponseInternalSchema: Schema<SearchResponse> = s.object<SearchResponse>(
  searchResponseProperties,
  { additionalProperties: s.json() },
);

export const searchResponseSchema: Schema<SearchResponse> = s.lazySchema(() =>
  s.object<SearchResponse>(
    {
      ...searchResponseProperties,
      meta: searchMetaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
