import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status that the transfer transitioned to. */
export const TransferStatus1 = {
  Requested: "requested",
  Initiated: "initiated",
  PendingReview: "pending-review",
  Processed: "processed",
  Failed: "failed",
  Blocked: "blocked",
  Returned: "returned",
} as const;
export type TransferStatus1 = (typeof TransferStatus1)[keyof typeof TransferStatus1] | (string & {});

export const transferStatus1Schema: EnumSchema<TransferStatus1> = s.enumOf<TransferStatus1>(TransferStatus1);
