import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiTPaginationMetaSchema, type ApiTPaginationMeta } from "./api-tpagination-meta.js";
import { jobJobSchema, type JobJob } from "./job-job.js";

export type JobsResponse = {
  data?: JobJob[];
  meta?: ApiTPaginationMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsResponseSchema: Schema<JobsResponse> = s.object<JobsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => jobJobSchema))),
    meta: s.optional(s.lazy(() => apiTPaginationMetaSchema)),
  },
  { additionalProperties: s.json() },
);
