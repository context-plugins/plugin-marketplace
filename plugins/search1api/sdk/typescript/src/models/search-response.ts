import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  searchParametersInternalSchema,
  searchParametersSchema,
  type SearchParameters,
} from "./search-parameters.js";
import { searchResultInternalSchema, searchResultSchema, type SearchResult } from "./search-result.js";

export type SearchResponse = {
  searchParameters: SearchParameters;
  results: SearchResult[];
  images?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchResponseProperties: s.Shape<SearchResponse> = {
  searchParameters: searchParametersInternalSchema,
  results: s.array(s.lazy(() => searchResultInternalSchema)),
  images: s.optional(s.array(s.string())),
};

export const searchResponseInternalSchema: Schema<SearchResponse> = s.object<SearchResponse>(
  searchResponseProperties,
  { additionalProperties: s.json() },
);

export const searchResponseSchema: Schema<SearchResponse> = s.lazySchema(() =>
  s.object<SearchResponse>(
    {
      ...searchResponseProperties,
      searchParameters: searchParametersSchema,
      results: s.array(s.lazy(() => searchResultSchema)),
      images: s.optional(s.array(s.string().check(s.url()))),
    },
    { additionalProperties: s.json() },
  ),
);
