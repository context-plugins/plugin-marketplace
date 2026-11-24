import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status2RendexRenderingJobsApiSchema,
  type Status2RendexRenderingJobsApi,
} from "./status2-rendex-rendering-jobs-api.js";

export type Data1 = {
  /** Unique job identifier */
  jobId?: string;
  /** Current job status */
  status?: Status2RendexRenderingJobsApi;
  /** URL that was captured */
  url?: string;
  /** Signed URL to the captured image (available when completed) */
  imageUrl?: string;
  /** Error message (available when failed) */
  error?: string;
  createdAt?: Date;
  completedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const data1Properties: s.Shape<Data1> = {
  jobId: s.optional(s.string()),
  status: s.optional(s.lazy(() => status2RendexRenderingJobsApiSchema)),
  url: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  error: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  completedAt: s.optional(s.dateTime()),
};

export const data1InternalSchema: Schema<Data1> = s.object<Data1>(data1Properties, {
  additionalProperties: s.json(),
});

export const data1Schema: Schema<Data1> = s.lazySchema(() =>
  s.object<Data1>(
    {
      ...data1Properties,
      url: s.optional(s.string().check(s.url())),
      imageUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
