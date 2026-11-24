import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testExecutionSortBySchema, type TestExecutionSortBy } from "./test-execution-sort-by.js";

export type ListTestExecutionsRequest = {
  sortBy?: TestExecutionSortBy;
  /**
   * The maximum number of test executions to return in each page. If there are fewer results than
   * the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListTestExecutions operation contains more results than specified in
   * the maxResults parameter, a token is returned in the response. Use that token in the nextToken
   * parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTestExecutionsRequestSchema: Schema<ListTestExecutionsRequest> =
  s.object<ListTestExecutionsRequest>(
    {
      sortBy: s.optional(s.lazy(() => testExecutionSortBySchema)),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
