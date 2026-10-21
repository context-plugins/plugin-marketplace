import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { facetFilterSetSchema, type FacetFilterSet } from "./facet-filter-set.js";
import {
  searchResultProminenceEnumSchema,
  type SearchResultProminenceEnum,
} from "./search-result-prominence-enum.js";

export type RecommendationsRequestOptions = {
  /**
   * Filter results to a single datasource name (e.g. gmail, slack). All results are returned if
   * missing.
   */
  datasourceFilter?: string;
  /**
   * Filter results to only those relevant to one or more datasources (e.g. jira, gdrive). All
   * results are returned if missing.
   */
  datasourcesFilter?: string[];
  /** A list of facet filter sets that will be OR'ed together. */
  facetFilterSets?: FacetFilterSet[];
  context?: Document;
  /** The types of prominence wanted in results returned. Default is any type. */
  resultProminence?: SearchResultProminenceEnum[];
};

export const recommendationsRequestOptionsSchema: Schema<RecommendationsRequestOptions> =
  s.object<RecommendationsRequestOptions>({
    datasourceFilter: s.optional(s.string()),
    datasourcesFilter: s.optional(s.array(s.string())),
    facetFilterSets: s.optional(s.array(s.lazy(() => facetFilterSetSchema))),
    context: s.optional(s.lazy(() => documentSchema)),
    resultProminence: s.optional(s.array(s.lazy(() => searchResultProminenceEnumSchema))),
  });
