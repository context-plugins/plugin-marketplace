import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the specified cache report. */
export const CacheReportStatus = {
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Canceled: "CANCELED",
  Failed: "FAILED",
  Error: "ERROR",
} as const;
export type CacheReportStatus = (typeof CacheReportStatus)[keyof typeof CacheReportStatus] | (string & {});

export const cacheReportStatusSchema: EnumSchema<CacheReportStatus> =
  s.enumOf<CacheReportStatus>(CacheReportStatus);
