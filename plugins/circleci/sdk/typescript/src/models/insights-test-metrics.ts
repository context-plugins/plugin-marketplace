import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mostFailedTestSchema, type MostFailedTest } from "./most-failed-test.js";
import { slowestTestSchema, type SlowestTest } from "./slowest-test.js";
import { testRunSchema, type TestRun } from "./test-run.js";

export type InsightsTestMetrics = {
  /** Average number of tests per run */
  averageTestCount?: number;
  /** Most frequently failing tests */
  mostFailedTests?: MostFailedTest[];
  /** Slowest tests by duration */
  slowestTests?: SlowestTest[];
  /** Recent test run summaries */
  testRuns?: TestRun[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsTestMetricsSchema: Schema<InsightsTestMetrics> = s.object<InsightsTestMetrics>(
  {
    averageTestCount: s.optional(s.int()),
    mostFailedTests: s.optional(s.array(s.lazy(() => mostFailedTestSchema))),
    slowestTests: s.optional(s.array(s.lazy(() => slowestTestSchema))),
    testRuns: s.optional(s.array(s.lazy(() => testRunSchema))),
    _keysMap: {
      averageTestCount: "average_test_count",
      mostFailedTests: "most_failed_tests",
      slowestTests: "slowest_tests",
      testRuns: "test_runs",
    },
  },
  { additionalProperties: s.json() },
);
