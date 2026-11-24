import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListVocabularyFiltersRequest = {
  /**
   * If your ListVocabularyFilters request returns more results than can be displayed, NextToken is
   * displayed in the response with an associated string. To get the next page of results, copy this
   * string and repeat your request, including NextToken with the value of the copied string. Repeat
   * as needed to view all your results.
   */
  nextToken?: string;
  /**
   * The maximum number of custom vocabulary filters to return in each page of results. If there are
   * fewer results than the value that you specify, only the actual results are returned. If you do
   * not specify a value, a default of 5 is used.
   */
  maxResults?: number;
  /**
   * Returns only the custom vocabulary filters that contain the specified string. The search is not
   * case sensitive.
   */
  nameContains?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVocabularyFiltersRequestSchema: Schema<ListVocabularyFiltersRequest> =
  s.object<ListVocabularyFiltersRequest>(
    {
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      nameContains: s.optional(s.string()),
      _keysMap: {
        nextToken: "NextToken",
        maxResults: "MaxResults",
        nameContains: "NameContains",
      },
    },
    { additionalProperties: s.json() },
  );
