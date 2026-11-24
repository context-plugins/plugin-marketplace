import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1RendexRenderingJobsApiSchema,
  type Status1RendexRenderingJobsApi,
} from "./status1-rendex-rendering-jobs-api.js";

export type Job = {
  jobId?: string;
  url?: string;
  status?: Status1RendexRenderingJobsApi;
  imageUrl?: string;
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobProperties: s.Shape<Job> = {
  jobId: s.optional(s.string()),
  url: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1RendexRenderingJobsApiSchema)),
  imageUrl: s.optional(s.string()),
  error: s.optional(s.string()),
};

export const jobInternalSchema: Schema<Job> = s.object<Job>(jobProperties, {
  additionalProperties: s.json(),
});

export const jobSchema: Schema<Job> = s.lazySchema(() =>
  s.object<Job>(
    {
      ...jobProperties,
      url: s.optional(s.string().check(s.url())),
      imageUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
