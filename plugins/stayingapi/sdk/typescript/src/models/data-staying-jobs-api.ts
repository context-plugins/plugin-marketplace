import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1StayingJobsApiSchema, type Status1StayingJobsApi } from "./status1-staying-jobs-api.js";

export type DataStayingJobsApi = {
  jobId: string;
  status: Status1StayingJobsApi;
  pollUrl: string;
  estimatedSeconds: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStayingJobsApiSchema: Schema<DataStayingJobsApi> = s.object<DataStayingJobsApi>(
  {
    jobId: s.string(),
    status: status1StayingJobsApiSchema,
    pollUrl: s.string(),
    estimatedSeconds: s.int(),
  },
  { additionalProperties: s.json() },
);
