import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  epicSearchResultInternalSchema,
  epicSearchResultSchema,
  type EpicSearchResult,
} from "./epic-search-result.js";

/** The results of the Epic search query. */
export type EpicSearchResults = {
  /**
   * The total number of matches for the search query. The first 1000 matches can be paged through
   * via the API.
   */
  total: number;
  /** A list of search results. */
  data: EpicSearchResult[];
  /** The URL path and query string for the next page of search results. */
  next: string | null;
};

const epicSearchResultsProperties: s.Shape<EpicSearchResults> = {
  total: s.int(),
  data: s.array(s.lazy(() => epicSearchResultInternalSchema)),
  next: s.nullable(s.string()),
};

export const epicSearchResultsInternalSchema: Schema<EpicSearchResults> =
  s.object<EpicSearchResults>(epicSearchResultsProperties);

export const epicSearchResultsSchema: Schema<EpicSearchResults> = s.lazySchema(() =>
  s.object<EpicSearchResults>({
    ...epicSearchResultsProperties,
    data: s.array(s.lazy(() => epicSearchResultSchema)),
  }),
);
