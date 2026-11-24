import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current job status */
export const Status2RendexRenderingJobsApi = {
  Queued: "queued",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type Status2RendexRenderingJobsApi =
  | (typeof Status2RendexRenderingJobsApi)[keyof typeof Status2RendexRenderingJobsApi]
  | (string & {});

export const status2RendexRenderingJobsApiSchema: EnumSchema<Status2RendexRenderingJobsApi> =
  s.enumOf<Status2RendexRenderingJobsApi>(Status2RendexRenderingJobsApi);
