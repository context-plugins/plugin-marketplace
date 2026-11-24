import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SyncSequenceRequestStatus = {
  Pending: "pending",
  Running: "running",
  Done: "done",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
export type SyncSequenceRequestStatus =
  | (typeof SyncSequenceRequestStatus)[keyof typeof SyncSequenceRequestStatus]
  | (string & {});

export const syncSequenceRequestStatusSchema: EnumSchema<SyncSequenceRequestStatus> =
  s.enumOf<SyncSequenceRequestStatus>(SyncSequenceRequestStatus);
