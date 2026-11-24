import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vocabularyFilterInfoSchema, type VocabularyFilterInfo } from "./vocabulary-filter-info.js";

export type ListVocabularyFiltersResponse = {
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /**
   * Provides information about the custom vocabulary filters that match the criteria specified in
   * your request.
   */
  vocabularyFilters?: VocabularyFilterInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVocabularyFiltersResponseSchema: Schema<ListVocabularyFiltersResponse> =
  s.object<ListVocabularyFiltersResponse>(
    {
      nextToken: s.optional(s.string()),
      vocabularyFilters: s.optional(s.array(s.lazy(() => vocabularyFilterInfoSchema))),
      _keysMap: {
        nextToken: "NextToken",
        vocabularyFilters: "VocabularyFilters",
      },
    },
    { additionalProperties: s.json() },
  );
