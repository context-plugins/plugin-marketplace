import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

/** Request to update a batch of jobs. */
export type BatchUpdateJobsRequest = {
  /** Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch. */
  jobs?: Job[];
  /**
   * Strongly recommended for the best service experience. Be aware that it will also increase
   * latency when checking the status of a batch operation. If update_mask is provided, only the
   * specified fields in Job are updated. Otherwise all the fields are updated. A field mask to
   * restrict the fields that are updated. Only top level fields of Job are supported. If
   * update_mask is provided, The Job inside JobResult will only contains fields that is updated,
   * plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large
   * response.
   */
  updateMask?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchUpdateJobsRequestSchema: Schema<BatchUpdateJobsRequest> = s.object<BatchUpdateJobsRequest>(
  {
    jobs: s.optional(s.array(s.lazy(() => jobSchema))),
    updateMask: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
