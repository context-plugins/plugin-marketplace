import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  epicSearchResultsInternalSchema,
  epicSearchResultsSchema,
  type EpicSearchResults,
} from "./epic-search-results.js";
import {
  iterationSearchResultsInternalSchema,
  iterationSearchResultsSchema,
  type IterationSearchResults,
} from "./iteration-search-results.js";
import {
  objectiveSearchResultsInternalSchema,
  objectiveSearchResultsSchema,
  type ObjectiveSearchResults,
} from "./objective-search-results.js";
import {
  storySearchResultsInternalSchema,
  storySearchResultsSchema,
  type StorySearchResults,
} from "./story-search-results.js";

/** The results of the multi-entity search query. */
export type SearchResults = {
  /** The results of the Epic search query. */
  epics?: EpicSearchResults;
  /** The results of the Story search query. */
  stories?: StorySearchResults;
  /** The results of the Iteration search query. */
  iterations?: IterationSearchResults;
  /** The results of the Objective search query. */
  milestones?: ObjectiveSearchResults;
};

const searchResultsProperties: s.Shape<SearchResults> = {
  epics: s.optional(s.lazy(() => epicSearchResultsInternalSchema)),
  stories: s.optional(s.lazy(() => storySearchResultsInternalSchema)),
  iterations: s.optional(s.lazy(() => iterationSearchResultsInternalSchema)),
  milestones: s.optional(s.lazy(() => objectiveSearchResultsInternalSchema)),
};

export const searchResultsInternalSchema: Schema<SearchResults> =
  s.object<SearchResults>(searchResultsProperties);

export const searchResultsSchema: Schema<SearchResults> = s.lazySchema(() =>
  s.object<SearchResults>({
    ...searchResultsProperties,
    epics: s.optional(s.lazy(() => epicSearchResultsSchema)),
    stories: s.optional(s.lazy(() => storySearchResultsSchema)),
    iterations: s.optional(s.lazy(() => iterationSearchResultsSchema)),
    milestones: s.optional(s.lazy(() => objectiveSearchResultsSchema)),
  }),
);
