import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the transfer. */
export const BalanceTransferStatus = {
  Created: "created",
  Failed: "failed",
  Succeeded: "succeeded",
} as const;
export type BalanceTransferStatus =
  | (typeof BalanceTransferStatus)[keyof typeof BalanceTransferStatus]
  | (string & {});

export const balanceTransferStatusSchema: EnumSchema<BalanceTransferStatus> =
  s.enumOf<BalanceTransferStatus>(BalanceTransferStatus);
