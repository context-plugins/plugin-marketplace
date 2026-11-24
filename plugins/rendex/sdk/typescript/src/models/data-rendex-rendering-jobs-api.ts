import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobInternalSchema, jobSchema, type Job } from "./job.js";
import {
  statusRendexRenderingJobsApiSchema,
  type StatusRendexRenderingJobsApi,
} from "./status-rendex-rendering-jobs-api.js";

export type DataRendexRenderingJobsApi = {
  /** Unique batch identifier */
  batchId?: string;
  /** Overall batch status */
  status?: StatusRendexRenderingJobsApi;
  /** Total URLs in the batch */
  totalUrls?: number;
  /** Number of completed captures */
  completed?: number;
  /** Number of failed captures */
  failed?: number;
  /** Per-URL job statuses */
  jobs?: Job[];
  createdAt?: Date;
  completedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataRendexRenderingJobsApiProperties: s.Shape<DataRendexRenderingJobsApi> = {
  batchId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusRendexRenderingJobsApiSchema)),
  totalUrls: s.optional(s.int()),
  completed: s.optional(s.int()),
  failed: s.optional(s.int()),
  jobs: s.optional(s.array(s.lazy(() => jobInternalSchema))),
  createdAt: s.optional(s.dateTime()),
  completedAt: s.optional(s.dateTime()),
};

export const dataRendexRenderingJobsApiInternalSchema: Schema<DataRendexRenderingJobsApi> =
  s.object<DataRendexRenderingJobsApi>(dataRendexRenderingJobsApiProperties, {
    additionalProperties: s.json(),
  });

export const dataRendexRenderingJobsApiSchema: Schema<DataRendexRenderingJobsApi> = s.lazySchema(() =>
  s.object<DataRendexRenderingJobsApi>(
    {
      ...dataRendexRenderingJobsApiProperties,
      jobs: s.optional(s.array(s.lazy(() => jobSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
