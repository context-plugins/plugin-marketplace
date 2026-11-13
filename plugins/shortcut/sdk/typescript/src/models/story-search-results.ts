import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  storySearchResultInternalSchema,
  storySearchResultSchema,
  type StorySearchResult,
} from "./story-search-result.js";

/** The results of the Story search query. */
export type StorySearchResults = {
  /**
   * The total number of matches for the search query. The first 1000 matches can be paged through
   * via the API.
   */
  total: number;
  /** A list of search results. */
  data: StorySearchResult[];
  /** The URL path and query string for the next page of search results. */
  next: string | null;
};

const storySearchResultsProperties: s.Shape<StorySearchResults> = {
  total: s.int(),
  data: s.array(s.lazy(() => storySearchResultInternalSchema)),
  next: s.nullable(s.string()),
};

export const storySearchResultsInternalSchema: Schema<StorySearchResults> = s.object<StorySearchResults>(
  storySearchResultsProperties,
);

export const storySearchResultsSchema: Schema<StorySearchResults> = s.lazySchema(() =>
  s.object<StorySearchResults>({
    ...storySearchResultsProperties,
    data: s.array(s.lazy(() => storySearchResultSchema)),
  }),
);
