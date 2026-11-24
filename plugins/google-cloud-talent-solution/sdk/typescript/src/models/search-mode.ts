import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Mode of a search. Defaults to SearchMode.JOB_SEARCH. */
export const SearchMode = {
  SearchModeUnspecified: "SEARCH_MODE_UNSPECIFIED",
  JobSearch: "JOB_SEARCH",
  FeaturedJobSearch: "FEATURED_JOB_SEARCH",
} as const;
export type SearchMode = (typeof SearchMode)[keyof typeof SearchMode] | (string & {});

export const searchModeSchema: EnumSchema<SearchMode> = s.enumOf<SearchMode>(SearchMode);
