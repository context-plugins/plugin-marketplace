import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the sentiment detection job. If the status is FAILED, the Messages field
 * shows the reason for the failure.
 */
export const JobStatus6 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus6 = (typeof JobStatus6)[keyof typeof JobStatus6] | (string & {});

export const jobStatus6Schema: EnumSchema<JobStatus6> = s.enumOf<JobStatus6>(JobStatus6);
