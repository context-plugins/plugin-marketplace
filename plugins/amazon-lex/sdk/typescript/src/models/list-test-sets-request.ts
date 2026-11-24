import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testSetSortBySchema, type TestSetSortBy } from "./test-set-sort-by.js";

export type ListTestSetsRequest = {
  sortBy?: TestSetSortBy;
  /**
   * The maximum number of test sets to return in each page. If there are fewer results than the max
   * page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListTestSets operation contains more results than specified in the
   * maxResults parameter, a token is returned in the response. Use that token in the nextToken
   * parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTestSetsRequestSchema: Schema<ListTestSetsRequest> = s.object<ListTestSetsRequest>(
  {
    sortBy: s.optional(s.lazy(() => testSetSortBySchema)),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
