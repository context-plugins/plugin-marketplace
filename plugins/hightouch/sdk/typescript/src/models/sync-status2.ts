import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The overall status of the sync */
export const SyncStatus2 = {
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
export type SyncStatus2 = (typeof SyncStatus2)[keyof typeof SyncStatus2] | (string & {});

export const syncStatus2Schema: EnumSchema<SyncStatus2> = s.enumOf<SyncStatus2>(SyncStatus2);
