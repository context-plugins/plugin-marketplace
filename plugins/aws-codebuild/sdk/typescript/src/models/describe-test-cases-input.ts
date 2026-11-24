import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testCaseFilterSchema, type TestCaseFilter } from "./test-case-filter.js";

export type DescribeTestCasesInput = {
  /** The ARN of the report for which test cases are returned. */
  reportArn: string;
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified
   * in maxResults. If there more items in the list, then a unique string called a nextToken is
   * returned. To get the next batch of items in the list, call this operation again, adding the
   * next token to the call. To get all of the items in the list, keep calling this operation with
   * each subsequent next token that is returned, until no more next tokens are returned.
   */
  nextToken?: string;
  /**
   * The maximum number of paginated test cases returned per response. Use nextToken to iterate
   * pages in the list of returned TestCase objects. The default value is 100.
   */
  maxResults?: number;
  filter?: TestCaseFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestCasesInputSchema: Schema<DescribeTestCasesInput> = s.object<DescribeTestCasesInput>(
  {
    reportArn: s.string(),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    filter: s.optional(s.lazy(() => testCaseFilterSchema)),
  },
  { additionalProperties: s.json() },
);
