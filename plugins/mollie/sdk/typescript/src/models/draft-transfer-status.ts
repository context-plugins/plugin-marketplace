import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the draft transfer. */
export const DraftTransferStatus = {
  PendingReview: "pending-review",
  Approved: "approved",
  Declined: "declined",
} as const;
export type DraftTransferStatus =
  | (typeof DraftTransferStatus)[keyof typeof DraftTransferStatus]
  | (string & {});

export const draftTransferStatusSchema: EnumSchema<DraftTransferStatus> =
  s.enumOf<DraftTransferStatus>(DraftTransferStatus);
