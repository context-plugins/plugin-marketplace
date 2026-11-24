import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iterationSlimInternalSchema, iterationSlimSchema, type IterationSlim } from "./iteration-slim.js";

/** The results of the Iteration search query. */
export type IterationSearchResults = {
  /**
   * The total number of matches for the search query. The first 1000 matches can be paged through
   * via the API.
   */
  total: number;
  /** A list of search results. */
  data: IterationSlim[];
  /** The URL path and query string for the next page of search results. */
  next: string | null;
};

const iterationSearchResultsProperties: s.Shape<IterationSearchResults> = {
  total: s.int(),
  data: s.array(s.lazy(() => iterationSlimInternalSchema)),
  next: s.nullable(s.string()),
};

export const iterationSearchResultsInternalSchema: Schema<IterationSearchResults> =
  s.object<IterationSearchResults>(iterationSearchResultsProperties);

export const iterationSearchResultsSchema: Schema<IterationSearchResults> = s.lazySchema(() =>
  s.object<IterationSearchResults>({
    ...iterationSearchResultsProperties,
    data: s.array(s.lazy(() => iterationSlimSchema)),
  }),
);
