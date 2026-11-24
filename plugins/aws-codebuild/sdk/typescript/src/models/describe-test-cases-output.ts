import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testCaseSchema, type TestCase } from "./test-case.js";

export type DescribeTestCasesOutput = {
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified
   * in maxResults. If there more items in the list, then a unique string called a nextToken is
   * returned. To get the next batch of items in the list, call this operation again, adding the
   * next token to the call. To get all of the items in the list, keep calling this operation with
   * each subsequent next token that is returned, until no more next tokens are returned.
   */
  nextToken?: string;
  /** The returned list of test cases. */
  testCases?: TestCase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestCasesOutputSchema: Schema<DescribeTestCasesOutput> =
  s.object<DescribeTestCasesOutput>(
    {
      nextToken: s.optional(s.string()),
      testCases: s.optional(s.array(s.lazy(() => testCaseSchema))),
    },
    { additionalProperties: s.json() },
  );
