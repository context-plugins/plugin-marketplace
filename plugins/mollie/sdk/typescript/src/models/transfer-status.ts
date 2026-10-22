import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the transfer. */
export const TransferStatus = {
  Requested: "requested",
  Initiated: "initiated",
  PendingReview: "pending-review",
  Processed: "processed",
  Failed: "failed",
  Blocked: "blocked",
  Returned: "returned",
} as const;
export type TransferStatus = (typeof TransferStatus)[keyof typeof TransferStatus] | (string & {});

export const transferStatusSchema: EnumSchema<TransferStatus> = s.enumOf<TransferStatus>(TransferStatus);
