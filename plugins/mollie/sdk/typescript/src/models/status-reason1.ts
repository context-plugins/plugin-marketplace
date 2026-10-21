import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  balanceTransferStatusReasonSchema,
  type BalanceTransferStatusReason,
} from "./balance-transfer-status-reason.js";

/** The reason for the current status of the transfer, if applicable. */
export type StatusReason1 = {
  /** A machine-readable code that indicates the reason for the transfer's status. */
  code: BalanceTransferStatusReason;
  /** A description of the status reason, localized according to the transfer. */
  message: string;
};

export const statusReason1Schema: Schema<StatusReason1> = s.object<StatusReason1>({
  code: balanceTransferStatusReasonSchema,
  message: s.string(),
});
