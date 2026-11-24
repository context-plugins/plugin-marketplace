import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of sync run */
export const SyncRunStatus1 = {
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
export type SyncRunStatus1 = (typeof SyncRunStatus1)[keyof typeof SyncRunStatus1] | (string & {});

export const syncRunStatus1Schema: EnumSchema<SyncRunStatus1> = s.enumOf<SyncRunStatus1>(SyncRunStatus1);
