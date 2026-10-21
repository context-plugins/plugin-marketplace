import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reportExecutionStatusSchema, type ReportExecutionStatus } from "../report-execution-status.js";

/**
 * Filters the results to only the reports that have a `status` that matches with any of the
 * provided status values.
 */
export type Status4 = ReportExecutionStatus[];

export const status4Schema: Schema<Status4> = s.of<Status4>(
  s.union([s.array(s.lazy(() => reportExecutionStatusSchema))]),
);
