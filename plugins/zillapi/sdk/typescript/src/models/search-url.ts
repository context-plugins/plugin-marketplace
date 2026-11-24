import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchUrl = {
  /**
   * A zillow.com search URL that MUST contain a `searchQueryState=` query parameter. Pretty URLs
   * (e.g. https://www.zillow.com/austin-tx/houses/) are rejected with 400 invalid_search_url.
   */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchUrlProperties: s.Shape<SearchUrl> = {
  url: s.string(),
};

export const searchUrlInternalSchema: Schema<SearchUrl> = s.object<SearchUrl>(searchUrlProperties, {
  additionalProperties: s.json(),
});

export const searchUrlSchema: Schema<SearchUrl> = s.lazySchema(() =>
  s.object<SearchUrl>(
    {
      ...searchUrlProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
