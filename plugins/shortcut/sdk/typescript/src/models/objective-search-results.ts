import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  objectiveSearchResultInternalSchema,
  objectiveSearchResultSchema,
  type ObjectiveSearchResult,
} from "./objective-search-result.js";

/** The results of the Objective search query. */
export type ObjectiveSearchResults = {
  /**
   * The total number of matches for the search query. The first 1000 matches can be paged through
   * via the API.
   */
  total: number;
  /** A list of search results. */
  data: ObjectiveSearchResult[];
  /** The URL path and query string for the next page of search results. */
  next: string | null;
};

const objectiveSearchResultsProperties: s.Shape<ObjectiveSearchResults> = {
  total: s.int(),
  data: s.array(s.lazy(() => objectiveSearchResultInternalSchema)),
  next: s.nullable(s.string()),
};

export const objectiveSearchResultsInternalSchema: Schema<ObjectiveSearchResults> =
  s.object<ObjectiveSearchResults>(objectiveSearchResultsProperties);

export const objectiveSearchResultsSchema: Schema<ObjectiveSearchResults> = s.lazySchema(() =>
  s.object<ObjectiveSearchResults>({
    ...objectiveSearchResultsProperties,
    data: s.array(s.lazy(() => objectiveSearchResultSchema)),
  }),
);
