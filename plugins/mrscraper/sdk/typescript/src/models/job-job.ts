import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobJobStatusSchema, type JobJobStatus } from "./job-job-status.js";

export type JobJob = {
  createdAt?: string;
  id?: number;
  name?: string;
  status?: JobJobStatus;
  updatedAt?: string;
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobJobSchema: Schema<JobJob> = s.object<JobJob>(
  {
    createdAt: s.optional(s.string()),
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => jobJobStatusSchema)),
    updatedAt: s.optional(s.string()),
    userId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
