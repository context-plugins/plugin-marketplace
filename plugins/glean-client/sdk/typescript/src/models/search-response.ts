import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorInfoSchema, type ErrorInfo } from "./error-info.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { facetResultSchema, type FacetResult } from "./facet-result.js";
import { generatedQnaSchema, type GeneratedQna } from "./generated-qna.js";
import { resultTabSchema, type ResultTab } from "./result-tab.js";
import { resultsDescriptionSchema, type ResultsDescription } from "./results-description.js";
import { searchResponseMetadataSchema, type SearchResponseMetadata } from "./search-response-metadata.js";
import { searchResultSchema, type SearchResult } from "./search-result.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";
import { structuredResultSchema, type StructuredResult } from "./structured-result.js";

export type SearchResponse = {
  /**
   * A token that should be passed for additional requests related to this request (such as more
   * results requests).
   */
  trackingToken?: string;
  sessionInfo?: SessionInfo;
  results?: SearchResult[];
  structuredResults?: StructuredResult[];
  generatedQnaResult?: GeneratedQna;
  errorInfo?: ErrorInfo;
  /** A platform-generated request ID to correlate backend logs. */
  requestId?: string;
  /** Time in milliseconds the backend took to respond to the request. */
  backendTimeMillis?: number;
  /** List of experiment ids for the corresponding request. */
  experimentIds?: number[];
  metadata?: SearchResponseMetadata;
  facetResults?: FacetResult[];
  /**
   * All result tabs available for the current query. Populated if QUERY_METADATA is specified in
   * the request.
   */
  resultTabs?: ResultTab[];
  /** The unique IDs of the result tabs to which this response belongs. */
  resultTabIds?: string[];
  resultsDescription?: ResultsDescription;
  /**
   * The actual applied facet filters based on the operators and facetFilters in the query. Useful
   * for mapping typed operators to visual facets.
   */
  rewrittenFacetFilters?: FacetFilter[];
  /**
   * Cursor that indicates the start of the next page of results. To be passed in "more" requests
   * for this query.
   */
  cursor?: string;
  /** Whether more results are available. Use cursor to retrieve them. */
  hasMoreResults?: boolean;
};

export const searchResponseSchema: Schema<SearchResponse> = s.object<SearchResponse>({
  trackingToken: s.optional(s.string()),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  results: s.optional(s.array(s.lazy(() => searchResultSchema))),
  structuredResults: s.optional(s.array(s.lazy(() => structuredResultSchema))),
  generatedQnaResult: s.optional(s.lazy(() => generatedQnaSchema)),
  errorInfo: s.optional(s.lazy(() => errorInfoSchema)),
  requestId: s.optional(s.string()),
  backendTimeMillis: s.optional(s.int()),
  experimentIds: s.optional(s.array(s.int())),
  metadata: s.optional(s.lazy(() => searchResponseMetadataSchema)),
  facetResults: s.optional(s.array(s.lazy(() => facetResultSchema))),
  resultTabs: s.optional(s.array(s.lazy(() => resultTabSchema))),
  resultTabIds: s.optional(s.array(s.string())),
  resultsDescription: s.optional(s.lazy(() => resultsDescriptionSchema)),
  rewrittenFacetFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  cursor: s.optional(s.string()),
  hasMoreResults: s.optional(s.boolean()),
  _keysMap: {
    requestId: "requestID",
  },
});
