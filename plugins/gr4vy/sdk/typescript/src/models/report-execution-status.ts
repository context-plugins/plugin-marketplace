import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportExecutionStatus = {
  Dispatched: "dispatched",
  Failed: "failed",
  Pending: "pending",
  Processing: "processing",
  Succeeded: "succeeded",
} as const;
export type ReportExecutionStatus =
  | (typeof ReportExecutionStatus)[keyof typeof ReportExecutionStatus]
  | (string & {});

export const reportExecutionStatusSchema: EnumSchema<ReportExecutionStatus> =
  s.enumOf<ReportExecutionStatus>(ReportExecutionStatus);
