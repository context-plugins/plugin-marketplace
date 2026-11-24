import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testSetDiscrepancyErrorsSchema,
  type TestSetDiscrepancyErrors,
} from "./test-set-discrepancy-errors.js";
import {
  testSetDiscrepancyReportResourceTargetSchema,
  type TestSetDiscrepancyReportResourceTarget,
} from "./test-set-discrepancy-report-resource-target.js";
import {
  testSetDiscrepancyReportStatusSchema,
  type TestSetDiscrepancyReportStatus,
} from "./test-set-discrepancy-report-status.js";

export type DescribeTestSetDiscrepancyReportResponse = {
  /** The unique identifier of the test set discrepancy report to describe. */
  testSetDiscrepancyReportId?: string;
  /** The test set Id for the test set discrepancy report. */
  testSetId?: string;
  /** The time and date of creation for the test set discrepancy report. */
  creationDateTime?: Date;
  target?: TestSetDiscrepancyReportResourceTarget;
  /** The status for the test set discrepancy report. */
  testSetDiscrepancyReportStatus?: TestSetDiscrepancyReportStatus;
  /** The date and time of the last update for the test set discrepancy report. */
  lastUpdatedDataTime?: Date;
  testSetDiscrepancyTopErrors?: TestSetDiscrepancyErrors;
  /** Pre-signed Amazon S3 URL to download the test set discrepancy report. */
  testSetDiscrepancyRawOutputUrl?: string;
  /** The failure report for the test set discrepancy report generation action. */
  failureReasons?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestSetDiscrepancyReportResponseSchema: Schema<DescribeTestSetDiscrepancyReportResponse> =
  s.object<DescribeTestSetDiscrepancyReportResponse>(
    {
      testSetDiscrepancyReportId: s.optional(s.string()),
      testSetId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      target: s.optional(s.lazy(() => testSetDiscrepancyReportResourceTargetSchema)),
      testSetDiscrepancyReportStatus: s.optional(s.lazy(() => testSetDiscrepancyReportStatusSchema)),
      lastUpdatedDataTime: s.optional(s.dateTime()),
      testSetDiscrepancyTopErrors: s.optional(s.lazy(() => testSetDiscrepancyErrorsSchema)),
      testSetDiscrepancyRawOutputUrl: s.optional(s.string()),
      failureReasons: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
