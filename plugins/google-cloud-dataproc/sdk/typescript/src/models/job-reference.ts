import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Encapsulates the full scoping used to reference a job. */
export type JobReference = {
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

export const jobReferenceSchema: Schema<JobReference> = s.object<JobReference>(
  {
    jobId: s.optional(s.string()),
    projectId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
