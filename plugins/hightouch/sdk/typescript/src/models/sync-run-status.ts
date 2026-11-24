import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of sync runs */
export const SyncRunStatus = {
  Cancelled: "cancelled",
  Failed: "failed",
  Queued: "queued",
  Success: "success",
  Warning: "warning",
  Querying: "querying",
  Processing: "processing",
  Reporting: "reporting",
  Interrupted: "interrupted",
} as const;
export type SyncRunStatus = (typeof SyncRunStatus)[keyof typeof SyncRunStatus] | (string & {});

export const syncRunStatusSchema: EnumSchema<SyncRunStatus> = s.enumOf<SyncRunStatus>(SyncRunStatus);
