import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testExecutionResultFilterBySchema,
  type TestExecutionResultFilterBy,
} from "./test-execution-result-filter-by.js";

export type ListTestExecutionResultItemsRequest = {
  /** The unique identifier of the test execution to list the result items. */
  testExecutionId: string;
  resultFilterBy: TestExecutionResultFilterBy;
  /**
   * The maximum number of test execution result items to return in each page. If there are fewer
   * results than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListTestExecutionResultItems operation contains more results than
   * specified in the maxResults parameter, a token is returned in the response. Use that token in
   * the nextToken parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTestExecutionResultItemsRequestSchema: Schema<ListTestExecutionResultItemsRequest> =
  s.object<ListTestExecutionResultItemsRequest>(
    {
      testExecutionId: s.string(),
      resultFilterBy: testExecutionResultFilterBySchema,
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
