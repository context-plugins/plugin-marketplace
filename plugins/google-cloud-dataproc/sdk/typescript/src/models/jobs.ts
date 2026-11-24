import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Jobs = {
  JobExecutionStatusUnspecified: "JOB_EXECUTION_STATUS_UNSPECIFIED",
  JobExecutionStatusRunning: "JOB_EXECUTION_STATUS_RUNNING",
  JobExecutionStatusSucceeded: "JOB_EXECUTION_STATUS_SUCCEEDED",
  JobExecutionStatusFailed: "JOB_EXECUTION_STATUS_FAILED",
  JobExecutionStatusUnknown: "JOB_EXECUTION_STATUS_UNKNOWN",
} as const;
export type Jobs = (typeof Jobs)[keyof typeof Jobs] | (string & {});

export const jobsSchema: EnumSchema<Jobs> = s.enumOf<Jobs>(Jobs);
