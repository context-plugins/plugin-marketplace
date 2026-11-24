import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobImportTraceResponseSchema, type JobImportTraceResponse } from "./job-import-trace-response.js";
import { jobStatusSchema, type JobStatus } from "./job-status.js";

export type JobImportResponse = {
  jobId: string;
  status: JobStatus;
  traces: JobImportTraceResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobImportResponseSchema: Schema<JobImportResponse> = s.object<JobImportResponse>(
  {
    jobId: s.string(),
    status: jobStatusSchema,
    traces: s.array(s.lazy(() => jobImportTraceResponseSchema)),
    _keysMap: {
      jobId: "job_id",
    },
  },
  { additionalProperties: s.json() },
);
