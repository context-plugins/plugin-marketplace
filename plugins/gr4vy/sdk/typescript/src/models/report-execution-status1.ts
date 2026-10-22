import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the report execution. */
export const ReportExecutionStatus1 = {
  Dispatched: "dispatched",
  Failed: "failed",
  Pending: "pending",
  Processing: "processing",
  Succeeded: "succeeded",
} as const;
export type ReportExecutionStatus1 =
  | (typeof ReportExecutionStatus1)[keyof typeof ReportExecutionStatus1]
  | (string & {});

export const reportExecutionStatus1Schema: EnumSchema<ReportExecutionStatus1> =
  s.enumOf<ReportExecutionStatus1>(ReportExecutionStatus1);
