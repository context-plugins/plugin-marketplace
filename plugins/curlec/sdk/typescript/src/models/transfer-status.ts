import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Transfer processing status. */
export const TransferStatus = {
  Created: "created",
  Pending: "pending",
  Processed: "processed",
  Failed: "failed",
  Reversed: "reversed",
  PartiallyReversed: "partially_reversed",
} as const;
export type TransferStatus = (typeof TransferStatus)[keyof typeof TransferStatus] | (string & {});

export const transferStatusSchema: EnumSchema<TransferStatus> = s.enumOf<TransferStatus>(TransferStatus);
