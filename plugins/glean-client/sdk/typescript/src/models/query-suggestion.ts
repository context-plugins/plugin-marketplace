import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultTabSchema, type ResultTab } from "./result-tab.js";
import { searchProviderInfoSchema, type SearchProviderInfo } from "./search-provider-info.js";
import {
  searchRequestInputDetailsSchema,
  type SearchRequestInputDetails,
} from "./search-request-input-details.js";
import { searchRequestOptionsSchema, type SearchRequestOptions } from "./search-request-options.js";
import { textRangeSchema, type TextRange } from "./text-range.js";

export type QuerySuggestion = {
  /** A query term missing from the original query on which this suggestion is based. */
  missingTerm?: string;
  /** The query being suggested (e.g. enforcing the missing term from the original query). */
  query: string;
  searchProviderInfo?: SearchProviderInfo;
  /** A user-facing description to display for the suggestion. */
  label?: string;
  /** The datasource associated with the suggestion. */
  datasource?: string;
  resultTab?: ResultTab;
  requestOptions?: SearchRequestOptions;
  /** The bolded ranges within the query of the QuerySuggestion. */
  ranges?: TextRange[];
  inputDetails?: SearchRequestInputDetails;
};

export const querySuggestionSchema: Schema<QuerySuggestion> = s.object<QuerySuggestion>({
  missingTerm: s.optional(s.string()),
  query: s.string(),
  searchProviderInfo: s.optional(s.lazy(() => searchProviderInfoSchema)),
  label: s.optional(s.string()),
  datasource: s.optional(s.string()),
  resultTab: s.optional(s.lazy(() => resultTabSchema)),
  requestOptions: s.optional(s.lazy(() => searchRequestOptionsSchema)),
  ranges: s.optional(s.array(s.lazy(() => textRangeSchema))),
  inputDetails: s.optional(s.lazy(() => searchRequestInputDetailsSchema)),
});
