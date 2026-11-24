import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MostFailedTest = {
  /** Name of the test */
  testName?: string;
  /** Class name of the test */
  classname?: string;
  /** Number of failed runs */
  failedRuns?: number;
  /** Total runs of this test */
  totalRuns?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mostFailedTestSchema: Schema<MostFailedTest> = s.object<MostFailedTest>(
  {
    testName: s.optional(s.string()),
    classname: s.optional(s.string()),
    failedRuns: s.optional(s.int()),
    totalRuns: s.optional(s.int()),
    _keysMap: {
      testName: "test_name",
      failedRuns: "failed_runs",
      totalRuns: "total_runs",
    },
  },
  { additionalProperties: s.json() },
);
