import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of a sync draft. New values may be added, so treat an unknown value as closed. */
export const SyncDraftStatus = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  Canceled: "canceled",
} as const;
export type SyncDraftStatus = (typeof SyncDraftStatus)[keyof typeof SyncDraftStatus] | (string & {});

export const syncDraftStatusSchema: EnumSchema<SyncDraftStatus> = s.enumOf<SyncDraftStatus>(SyncDraftStatus);
