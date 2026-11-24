import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobJobSchema, type JobJob } from "./job-job.js";

export type JobsResponse1 = {
  data?: JobJob;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsResponse1Schema: Schema<JobsResponse1> = s.object<JobsResponse1>(
  {
    data: s.optional(s.lazy(() => jobJobSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
