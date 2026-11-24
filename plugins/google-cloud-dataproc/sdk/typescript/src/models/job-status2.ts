import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JobStatus2 = {
  JobExecutionStatusUnspecified: "JOB_EXECUTION_STATUS_UNSPECIFIED",
  JobExecutionStatusRunning: "JOB_EXECUTION_STATUS_RUNNING",
  JobExecutionStatusSucceeded: "JOB_EXECUTION_STATUS_SUCCEEDED",
  JobExecutionStatusFailed: "JOB_EXECUTION_STATUS_FAILED",
  JobExecutionStatusUnknown: "JOB_EXECUTION_STATUS_UNKNOWN",
} as const;
export type JobStatus2 = (typeof JobStatus2)[keyof typeof JobStatus2] | (string & {});

export const jobStatus2Schema: EnumSchema<JobStatus2> = s.enumOf<JobStatus2>(JobStatus2);
