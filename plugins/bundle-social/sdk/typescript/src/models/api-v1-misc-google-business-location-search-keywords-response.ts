import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rangeInternalSchema, rangeSchema, type Range } from "./range.js";
import { searchKeywordSchema, type SearchKeyword } from "./search-keyword.js";

export type ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse = {
  /** The Google Business location the keywords belong to, as `locations/{locationId}`. */
  location: string;
  range: Range;
  searchKeywords?: SearchKeyword[];
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscGoogleBusinessLocationSearchKeywordsResponseProperties: s.Shape<ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse> =
  {
    location: s.string(),
    range: rangeInternalSchema,
    searchKeywords: s.optional(s.array(s.lazy(() => searchKeywordSchema))),
    nextPageToken: s.optional(s.string()),
  };

export const apiV1MiscGoogleBusinessLocationSearchKeywordsResponseInternalSchema: Schema<ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse>(
    apiV1MiscGoogleBusinessLocationSearchKeywordsResponseProperties,
    { additionalProperties: s.json() },
  );

export const apiV1MiscGoogleBusinessLocationSearchKeywordsResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse>(
      {
        ...apiV1MiscGoogleBusinessLocationSearchKeywordsResponseProperties,
        range: rangeSchema,
      },
      { additionalProperties: s.json() },
    ),
  );
