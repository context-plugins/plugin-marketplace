import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request to delete a batch of jobs. */
export type BatchDeleteJobsRequest = {
  /**
   * The names of the jobs to delete. The format is
   * "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example,
   * "projects/foo/tenants/bar/jobs/baz". A maximum of 200 jobs can be deleted in a batch.
   */
  names?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDeleteJobsRequestSchema: Schema<BatchDeleteJobsRequest> = s.object<BatchDeleteJobsRequest>(
  {
    names: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
