import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { jobCompletedInternalSchema, jobCompletedSchema, type JobCompleted } from "../job-completed.js";
import { jobFailedInternalSchema, jobFailedSchema, type JobFailed } from "../job-failed.js";
import { jobInProgressSchema, type JobInProgress } from "../job-in-progress.js";

export type JobResponse = JobInProgress | JobCompleted | JobFailed;

export const jobResponseInternalSchema: Schema<JobResponse> = s.of<JobResponse>(
  s.union([
    s.lazy(() => jobInProgressSchema),
    s.lazy(() => jobCompletedInternalSchema),
    s.lazy(() => jobFailedInternalSchema),
  ]),
);

export const jobResponseSchema: Schema<JobResponse> = s.lazySchema(() =>
  s.of<JobResponse>(
    s.union([
      s.lazy(() => jobInProgressSchema),
      s.lazy(() => jobCompletedSchema),
      s.lazy(() => jobFailedSchema),
    ]),
  ),
);
