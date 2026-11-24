import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatusSchema, type JobStatus } from "./job-status.js";

export type JobImportFinishResponse = {
  jobId: string;
  status: JobStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobImportFinishResponseSchema: Schema<JobImportFinishResponse> =
  s.object<JobImportFinishResponse>(
    {
      jobId: s.string(),
      status: jobStatusSchema,
      _keysMap: {
        jobId: "job_id",
      },
    },
    { additionalProperties: s.json() },
  );
