import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1RendexRenderingJobsApi = {
  Queued: "queued",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type Status1RendexRenderingJobsApi =
  | (typeof Status1RendexRenderingJobsApi)[keyof typeof Status1RendexRenderingJobsApi]
  | (string & {});

export const status1RendexRenderingJobsApiSchema: EnumSchema<Status1RendexRenderingJobsApi> =
  s.enumOf<Status1RendexRenderingJobsApi>(Status1RendexRenderingJobsApi);
