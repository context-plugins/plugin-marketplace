import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTokenSchema, type AuthToken } from "./auth-token.js";
import { facetBucketFilterSchema, type FacetBucketFilter } from "./facet-bucket-filter.js";
import { facetFilterSetSchema, type FacetFilterSet } from "./facet-filter-set.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { responseHintSchema, type ResponseHint } from "./response-hint.js";
import { restrictionFiltersSchema, type RestrictionFilters } from "./restriction-filters.js";

export type SearchRequestOptions = {
  /**
   * Filter results to a single datasource name (e.g. gmail, slack). All results are returned if
   * missing.
   */
  datasourceFilter?: string;
  /**
   * Filter results to one or more datasources (e.g. gmail, slack). All results are returned if
   * missing.
   */
  datasourcesFilter?: string[];
  /**
   * If true, the operators in the query are taken to override any operators in facetFilters in the
   * case of conflict. This is used to correctly set rewrittenFacetFilters and rewrittenQuery.
   */
  queryOverridesFacetFilters?: boolean;
  /**
   * A list of filters for the query. An AND is assumed between different facetFilters. For example,
   * owner Sumeet and type Spreadsheet shows documents that are by Sumeet AND are Spreadsheets.
   */
  facetFilters?: FacetFilter[];
  /**
   * A list of facet filter sets that will be OR'ed together. SearchRequestOptions where both
   * facetFilterSets and facetFilters set are considered as bad request. Callers should set only one
   * of these fields.
   */
  facetFilterSets?: FacetFilterSet[];
  facetBucketFilter?: FacetBucketFilter;
  /** The maximum number of FacetBuckets to return in each FacetResult. */
  facetBucketSize: number;
  /**
   * Facets for which FacetResults should be fetched and that don't apply to a particular
   * datasource. If specified, these values will replace the standard default facets
   * (last_updated_at, from, etc.). The requested facets will be returned alongside
   * datasource-specific facets if searching a single datasource.
   */
  defaultFacets?: string[];
  /** Auth tokens which may be used for non-indexed, federated results (e.g. Gmail). */
  authTokens?: AuthToken[];
  /**
   * Hints that the QE should return result counts (via the datasource facet result) for all
   * supported datasources, rather than just those specified in the datasource[s]Filter
   */
  fetchAllDatasourceCounts?: boolean;
  /** Array of hints containing which fields should be populated in the response. */
  responseHints?: ResponseHint[];
  /**
   * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours
   * behind UTC.
   */
  timezoneOffset?: number;
  /** Whether or not to disable spellcheck. */
  disableSpellcheck?: boolean;
  /** Disables automatic adjustment of the input query for spelling corrections or other reasons. */
  disableQueryAutocorrect?: boolean;
  /**
   * Enables expanded content to be returned for LLM usage. The size of content per result returned
   * should be modified using maxSnippetSize. Server may return less or more than what is specified
   * in maxSnippetSize. For more details, see
   * https://developers.glean.com/guides/search/llm-content.
   */
  returnLlmContentOverSnippets?: boolean;
  inclusions?: RestrictionFilters;
  exclusions?: RestrictionFilters;
};

export const searchRequestOptionsSchema: Schema<SearchRequestOptions> = s.object<SearchRequestOptions>({
  datasourceFilter: s.optional(s.string()),
  datasourcesFilter: s.optional(s.array(s.string())),
  queryOverridesFacetFilters: s.optional(s.boolean()),
  facetFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  facetFilterSets: s.optional(s.array(s.lazy(() => facetFilterSetSchema))),
  facetBucketFilter: s.optional(s.lazy(() => facetBucketFilterSchema)),
  facetBucketSize: s.int(),
  defaultFacets: s.optional(s.array(s.string())),
  authTokens: s.optional(s.array(s.lazy(() => authTokenSchema))),
  fetchAllDatasourceCounts: s.optional(s.boolean()),
  responseHints: s.optional(s.array(s.lazy(() => responseHintSchema))),
  timezoneOffset: s.optional(s.int()),
  disableSpellcheck: s.optional(s.boolean()),
  disableQueryAutocorrect: s.optional(s.boolean()),
  returnLlmContentOverSnippets: s.optional(s.boolean()),
  inclusions: s.optional(s.lazy(() => restrictionFiltersSchema)),
  exclusions: s.optional(s.lazy(() => restrictionFiltersSchema)),
});
