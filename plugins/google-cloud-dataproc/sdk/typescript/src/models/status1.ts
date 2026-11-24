import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1 = {
  JobExecutionStatusUnspecified: "JOB_EXECUTION_STATUS_UNSPECIFIED",
  JobExecutionStatusRunning: "JOB_EXECUTION_STATUS_RUNNING",
  JobExecutionStatusSucceeded: "JOB_EXECUTION_STATUS_SUCCEEDED",
  JobExecutionStatusFailed: "JOB_EXECUTION_STATUS_FAILED",
  JobExecutionStatusUnknown: "JOB_EXECUTION_STATUS_UNKNOWN",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
