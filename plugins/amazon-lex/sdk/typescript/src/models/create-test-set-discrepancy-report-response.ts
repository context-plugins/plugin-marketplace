import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testSetDiscrepancyReportResourceTargetSchema,
  type TestSetDiscrepancyReportResourceTarget,
} from "./test-set-discrepancy-report-resource-target.js";

export type CreateTestSetDiscrepancyReportResponse = {
  /** The unique identifier of the test set discrepancy report to describe. */
  testSetDiscrepancyReportId?: string;
  /** The creation date and time for the test set discrepancy report. */
  creationDateTime?: Date;
  /** The test set Id for the test set discrepancy report. */
  testSetId?: string;
  target?: TestSetDiscrepancyReportResourceTarget;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTestSetDiscrepancyReportResponseSchema: Schema<CreateTestSetDiscrepancyReportResponse> =
  s.object<CreateTestSetDiscrepancyReportResponse>(
    {
      testSetDiscrepancyReportId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      testSetId: s.optional(s.string()),
      target: s.optional(s.lazy(() => testSetDiscrepancyReportResourceTargetSchema)),
    },
    { additionalProperties: s.json() },
  );
