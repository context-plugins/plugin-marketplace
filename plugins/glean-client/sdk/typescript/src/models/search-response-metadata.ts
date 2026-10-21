import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { querySuggestionListSchema, type QuerySuggestionList } from "./query-suggestion-list.js";
import { querySuggestionSchema, type QuerySuggestion } from "./query-suggestion.js";
import { searchWarningSchema, type SearchWarning } from "./search-warning.js";
import { textRangeSchema, type TextRange } from "./text-range.js";

export type SearchResponseMetadata = {
  /**
   * A cleaned up or updated version of the query to be displayed in the query box. Useful for
   * mapping visual facets to search operators.
   */
  rewrittenQuery?: string;
  /** The actual query used to perform search and return results. */
  searchedQuery?: string;
  /** The query used to perform search and return results, with negated terms and facets removed. */
  searchedQueryWithoutNegation?: string;
  /** The bolded ranges within the searched query. */
  searchedQueryRanges?: TextRange[];
  /** The query text sent by the client in the request. */
  originalQuery?: string;
  querySuggestion?: QuerySuggestion;
  additionalQuerySuggestions?: QuerySuggestionList;
  /** A list of terms that were negated when processing the query. */
  negatedTerms?: string[];
  /** A different query was performed than the one requested. */
  modifiedQueryWasUsed?: boolean;
  /**
   * No results were found for the original query. The usage of this bit in conjunction with
   * modifiedQueryWasUsed will dictate whether the full page replacement is 0-result or few-result
   * based.
   */
  originalQueryHadNoResults?: boolean;
  searchWarning?: SearchWarning;
  /** Whether the query triggered expert detection results in the People tab. */
  triggeredExpertDetection?: boolean;
  /** Whether the query was modified to remove quotes */
  isNoQuotesSuggestion?: boolean;
};

export const searchResponseMetadataSchema: Schema<SearchResponseMetadata> = s.object<SearchResponseMetadata>({
  rewrittenQuery: s.optional(s.string()),
  searchedQuery: s.optional(s.string()),
  searchedQueryWithoutNegation: s.optional(s.string()),
  searchedQueryRanges: s.optional(s.array(s.lazy(() => textRangeSchema))),
  originalQuery: s.optional(s.string()),
  querySuggestion: s.optional(s.lazy(() => querySuggestionSchema)),
  additionalQuerySuggestions: s.optional(s.lazy(() => querySuggestionListSchema)),
  negatedTerms: s.optional(s.array(s.string())),
  modifiedQueryWasUsed: s.optional(s.boolean()),
  originalQueryHadNoResults: s.optional(s.boolean()),
  searchWarning: s.optional(s.lazy(() => searchWarningSchema)),
  triggeredExpertDetection: s.optional(s.boolean()),
  isNoQuotesSuggestion: s.optional(s.boolean()),
});
