import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRendexRenderingWatchApi = {
  Queued: "queued",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type StatusRendexRenderingWatchApi =
  | (typeof StatusRendexRenderingWatchApi)[keyof typeof StatusRendexRenderingWatchApi]
  | (string & {});

export const statusRendexRenderingWatchApiSchema: EnumSchema<StatusRendexRenderingWatchApi> =
  s.enumOf<StatusRendexRenderingWatchApi>(StatusRendexRenderingWatchApi);
