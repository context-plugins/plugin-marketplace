import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestCaseFilter = {
  /**
   * The status used to filter test cases. A TestCaseFilter can have one status. Valid values are:
   * SUCCEEDED FAILED ERROR SKIPPED UNKNOWN
   */
  status?: string;
  /**
   * A keyword that is used to filter on the name or the prefix of the test cases. Only test cases
   * where the keyword is a substring of the name or the prefix will be returned.
   */
  keyword?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testCaseFilterSchema: Schema<TestCaseFilter> = s.object<TestCaseFilter>(
  {
    status: s.optional(s.string()),
    keyword: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
