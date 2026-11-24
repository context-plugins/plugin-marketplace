import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. The fully qualified reference to the job, which can be used to obtain the equivalent
 * REST path of the job resource. If this property is not specified when a job is created, the
 * server generates a job_id.
 */
export type JobReference2 = {
  /**
   * Optional. The job ID, which must be unique within the project.The ID must contain only letters
   * (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100
   * characters.If not specified by the caller, the job ID will be provided by the server.
   */
  jobId?: string;
  /**
   * Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified,
   * must match the request project ID.
   */
  projectId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobReference2Schema: Schema<JobReference2> = s.object<JobReference2>(
  {
    jobId: s.optional(s.string()),
    projectId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
