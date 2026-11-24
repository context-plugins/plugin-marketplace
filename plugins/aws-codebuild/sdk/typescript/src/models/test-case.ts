import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestCase = {
  /** The ARN of the report to which the test case belongs. */
  reportArn?: string;
  /** The path to the raw data file that contains the test result. */
  testRawDataPath?: string;
  /**
   * A string that is applied to a series of related test cases. CodeBuild generates the prefix. The
   * prefix depends on the framework used to generate the tests.
   */
  prefix?: string;
  /** The name of the test case. */
  name?: string;
  /**
   * The status returned by the test case after it was run. Valid statuses are SUCCEEDED, FAILED,
   * ERROR, SKIPPED, and UNKNOWN.
   */
  status?: string;
  /** The number of nanoseconds it took to run this test case. */
  durationInNanoSeconds?: number;
  /** A message associated with a test case. For example, an error message or stack trace. */
  message?: string;
  /**
   * The date and time a test case expires. A test case expires 30 days after it is created. An
   * expired test case is not available to view in CodeBuild.
   */
  expired?: Date;
  /** The name of the test suite that the test case is a part of. */
  testSuiteName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testCaseSchema: Schema<TestCase> = s.object<TestCase>(
  {
    reportArn: s.optional(s.string()),
    testRawDataPath: s.optional(s.string()),
    prefix: s.optional(s.string()),
    name: s.optional(s.string()),
    status: s.optional(s.string()),
    durationInNanoSeconds: s.optional(s.int()),
    message: s.optional(s.string()),
    expired: s.optional(s.dateTime()),
    testSuiteName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
