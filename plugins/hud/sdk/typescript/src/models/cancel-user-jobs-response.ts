import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cancelUserJobsJobDetailSchema,
  type CancelUserJobsJobDetail,
} from "./cancel-user-jobs-job-detail.js";

/** "Stop everything" result, grouped by job so callers can show a breakdown. */
export type CancelUserJobsResponse = {
  /** @default "accepted" */
  status?: string;
  jobsCancelled: number;
  totalTasksCancelled: number;
  jobDetails: CancelUserJobsJobDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelUserJobsResponseSchema: Schema<CancelUserJobsResponse> = s.object<CancelUserJobsResponse>(
  {
    status: s.defaulted(s.string(), "accepted"),
    jobsCancelled: s.int(),
    totalTasksCancelled: s.int(),
    jobDetails: s.array(s.lazy(() => cancelUserJobsJobDetailSchema)),
    _keysMap: {
      jobsCancelled: "jobs_cancelled",
      totalTasksCancelled: "total_tasks_cancelled",
      jobDetails: "job_details",
    },
  },
  { additionalProperties: s.json() },
);
