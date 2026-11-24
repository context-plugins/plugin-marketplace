import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTestSetDiscrepancyReportRequest = {
  /** The unique identifier of the test set discrepancy report. */
  testSetDiscrepancyReportId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestSetDiscrepancyReportRequestSchema: Schema<DescribeTestSetDiscrepancyReportRequest> =
  s.object<DescribeTestSetDiscrepancyReportRequest>(
    {
      testSetDiscrepancyReportId: s.string(),
    },
    { additionalProperties: s.json() },
  );
