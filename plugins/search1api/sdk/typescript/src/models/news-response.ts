import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  newsParametersInternalSchema,
  newsParametersSchema,
  type NewsParameters,
} from "./news-parameters.js";
import { searchResultInternalSchema, searchResultSchema, type SearchResult } from "./search-result.js";

export type NewsResponse = {
  searchParameters: NewsParameters;
  results: SearchResult[];
  images?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const newsResponseProperties: s.Shape<NewsResponse> = {
  searchParameters: newsParametersInternalSchema,
  results: s.array(s.lazy(() => searchResultInternalSchema)),
  images: s.optional(s.array(s.string())),
};

export const newsResponseInternalSchema: Schema<NewsResponse> = s.object<NewsResponse>(
  newsResponseProperties,
  { additionalProperties: s.json() },
);

export const newsResponseSchema: Schema<NewsResponse> = s.lazySchema(() =>
  s.object<NewsResponse>(
    {
      ...newsResponseProperties,
      searchParameters: newsParametersSchema,
      results: s.array(s.lazy(() => searchResultSchema)),
      images: s.optional(s.array(s.string().check(s.url()))),
    },
    { additionalProperties: s.json() },
  ),
);
