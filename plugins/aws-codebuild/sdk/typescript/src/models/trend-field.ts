import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The test report value to accumulate. This must be one of the following values: Test reports:
 * DURATION Accumulate the test run times for the specified reports. PASS_RATE Accumulate the
 * percentage of tests that passed for the specified test reports. TOTAL Accumulate the total number
 * of tests for the specified test reports. Code coverage reports: BRANCH_COVERAGE Accumulate the
 * branch coverage percentages for the specified test reports. BRANCHES_COVERED Accumulate the
 * branches covered values for the specified test reports. BRANCHES_MISSED Accumulate the branches
 * missed values for the specified tes
 */
export const TrendField = {
  PassRate: "PASS_RATE",
  Duration: "DURATION",
  Total: "TOTAL",
  LineCoverage: "LINE_COVERAGE",
  LinesCovered: "LINES_COVERED",
  LinesMissed: "LINES_MISSED",
  BranchCoverage: "BRANCH_COVERAGE",
  BranchesCovered: "BRANCHES_COVERED",
  BranchesMissed: "BRANCHES_MISSED",
} as const;
export type TrendField = (typeof TrendField)[keyof typeof TrendField] | (string & {});

export const trendFieldSchema: EnumSchema<TrendField> = s.enumOf<TrendField>(TrendField);
