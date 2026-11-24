import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status for the test set discrepancy report. */
export const TestSetDiscrepancyReportStatus = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
} as const;
export type TestSetDiscrepancyReportStatus =
  | (typeof TestSetDiscrepancyReportStatus)[keyof typeof TestSetDiscrepancyReportStatus]
  | (string & {});

export const testSetDiscrepancyReportStatusSchema: EnumSchema<TestSetDiscrepancyReportStatus> =
  s.enumOf<TestSetDiscrepancyReportStatus>(TestSetDiscrepancyReportStatus);
