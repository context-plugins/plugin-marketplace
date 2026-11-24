import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testCaseSchema, type TestCase } from "./test-case.js";

/** Paginated response containing test cases */
export type TestCaseListResponse = {
  /** Total number of test cases */
  totalCount?: number;
  testCases?: TestCase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testCaseListResponseSchema: Schema<TestCaseListResponse> = s.object<TestCaseListResponse>(
  {
    totalCount: s.optional(s.int()),
    testCases: s.optional(s.array(s.lazy(() => testCaseSchema))),
  },
  { additionalProperties: s.json() },
);
