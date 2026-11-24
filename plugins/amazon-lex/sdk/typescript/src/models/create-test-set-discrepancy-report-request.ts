import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testSetDiscrepancyReportResourceTargetSchema,
  type TestSetDiscrepancyReportResourceTarget,
} from "./test-set-discrepancy-report-resource-target.js";

export type CreateTestSetDiscrepancyReportRequest = {
  /** The test set Id for the test set discrepancy report. */
  testSetId: string;
  target: TestSetDiscrepancyReportResourceTarget;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTestSetDiscrepancyReportRequestSchema: Schema<CreateTestSetDiscrepancyReportRequest> =
  s.object<CreateTestSetDiscrepancyReportRequest>(
    {
      testSetId: s.string(),
      target: testSetDiscrepancyReportResourceTargetSchema,
    },
    { additionalProperties: s.json() },
  );
