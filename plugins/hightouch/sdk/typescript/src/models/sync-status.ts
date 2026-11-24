import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** SyncStatus */
export const SyncStatus = {
  Disabled: "disabled",
  Pending: "pending",
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
export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus] | (string & {});

export const syncStatusSchema: EnumSchema<SyncStatus> = s.enumOf<SyncStatus>(SyncStatus);
