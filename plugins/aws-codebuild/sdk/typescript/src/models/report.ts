import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  codeCoverageReportSummarySchema,
  type CodeCoverageReportSummary,
} from "./code-coverage-report-summary.js";
import { reportExportConfigSchema, type ReportExportConfig } from "./report-export-config.js";
import { status4Schema, type Status4 } from "./status4.js";
import { testReportSummarySchema, type TestReportSummary } from "./test-report-summary.js";
import { type10Schema, type Type10 } from "./type10.js";

export type Report = {
  /** The ARN of the report run. */
  arn?: string;
  /**
   * The type of the report that was run. CODE_COVERAGE A code coverage report. TEST A test report.
   */
  type?: Type10;
  /** The name of the report that was run. */
  name?: string;
  /** The ARN of the report group associated with this report. */
  reportGroupArn?: string;
  /** The ARN of the build run that generated this report. */
  executionId?: string;
  /** The status of this report. */
  status?: Status4;
  /** The date and time this report run occurred. */
  created?: Date;
  /**
   * The date and time a report expires. A report expires 30 days after it is created. An expired
   * report is not available to view in CodeBuild.
   */
  expired?: Date;
  exportConfig?: ReportExportConfig;
  /**
   * A boolean that specifies if this report run is truncated. The list of test cases is truncated
   * after the maximum number of test cases is reached.
   */
  truncated?: boolean;
  testSummary?: TestReportSummary;
  codeCoverageSummary?: CodeCoverageReportSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportSchema: Schema<Report> = s.object<Report>(
  {
    arn: s.optional(s.string()),
    type: s.optional(s.lazy(() => type10Schema)),
    name: s.optional(s.string()),
    reportGroupArn: s.optional(s.string()),
    executionId: s.optional(s.string()),
    status: s.optional(s.lazy(() => status4Schema)),
    created: s.optional(s.dateTime()),
    expired: s.optional(s.dateTime()),
    exportConfig: s.optional(s.lazy(() => reportExportConfigSchema)),
    truncated: s.optional(s.boolean()),
    testSummary: s.optional(s.lazy(() => testReportSummarySchema)),
    codeCoverageSummary: s.optional(s.lazy(() => codeCoverageReportSummarySchema)),
  },
  { additionalProperties: s.json() },
);
