import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestReportSummary = {
  /**
   * The number of test cases in this TestReportSummary. The total includes truncated test cases.
   */
  total: number;
  /**
   * A map that contains the number of each type of status returned by the test results in this
   * TestReportSummary.
   */
  statusCounts: Record<string, number>;
  /** The number of nanoseconds it took to run all of the test cases in this report. */
  durationInNanoSeconds: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testReportSummarySchema: Schema<TestReportSummary> = s.object<TestReportSummary>(
  {
    total: s.int(),
    statusCounts: s.record(s.string(), s.int()),
    durationInNanoSeconds: s.int(),
  },
  { additionalProperties: s.json() },
);
