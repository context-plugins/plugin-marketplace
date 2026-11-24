import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { trendFieldSchema, type TrendField } from "./trend-field.js";

export type GetReportGroupTrendInput = {
  /** The ARN of the report group that contains the reports to analyze. */
  reportGroupArn: string;
  /**
   * The number of reports to analyze. This operation always retrieves the most recent reports. If
   * this parameter is omitted, the most recent 100 reports are analyzed.
   */
  numOfReports?: number;
  /**
   * The test report value to accumulate. This must be one of the following values: Test reports:
   * DURATION Accumulate the test run times for the specified reports. PASS_RATE Accumulate the
   * percentage of tests that passed for the specified test reports. TOTAL Accumulate the total
   * number of tests for the specified test reports. Code coverage reports: BRANCH_COVERAGE
   * Accumulate the branch coverage percentages for the specified test reports. BRANCHES_COVERED
   * Accumulate the branches covered values for the specified test reports. BRANCHES_MISSED
   * Accumulate the branches missed values for the specified tes
   */
  trendField: TrendField;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getReportGroupTrendInputSchema: Schema<GetReportGroupTrendInput> =
  s.object<GetReportGroupTrendInput>(
    {
      reportGroupArn: s.string(),
      numOfReports: s.optional(s.int()),
      trendField: trendFieldSchema,
    },
    { additionalProperties: s.json() },
  );
