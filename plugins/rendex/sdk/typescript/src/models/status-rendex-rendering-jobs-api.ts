import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Overall batch status */
export const StatusRendexRenderingJobsApi = {
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type StatusRendexRenderingJobsApi =
  | (typeof StatusRendexRenderingJobsApi)[keyof typeof StatusRendexRenderingJobsApi]
  | (string & {});

export const statusRendexRenderingJobsApiSchema: EnumSchema<StatusRendexRenderingJobsApi> =
  s.enumOf<StatusRendexRenderingJobsApi>(StatusRendexRenderingJobsApi);
