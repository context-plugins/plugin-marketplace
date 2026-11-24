import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

/** Request to create a batch of jobs. */
export type BatchCreateJobsRequest = {
  /** Required. The jobs to be created. A maximum of 200 jobs can be created in a batch. */
  jobs?: Job[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchCreateJobsRequestSchema: Schema<BatchCreateJobsRequest> = s.object<BatchCreateJobsRequest>(
  {
    jobs: s.optional(s.array(s.lazy(() => jobSchema))),
  },
  { additionalProperties: s.json() },
);
