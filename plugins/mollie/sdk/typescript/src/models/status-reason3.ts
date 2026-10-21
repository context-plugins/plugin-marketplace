import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  balanceTransferStatusReasonResponseSchema,
  type BalanceTransferStatusReasonResponse,
} from "./balance-transfer-status-reason-response.js";

/** The reason for the current status of the transfer, if applicable. */
export type StatusReason3 = {
  /** A machine-readable code that indicates the reason for the transfer's status. */
  code: BalanceTransferStatusReasonResponse;
  /** A description of the status reason, localized according to the transfer. */
  message: string;
};

export const statusReason3Schema: Schema<StatusReason3> = s.object<StatusReason3>({
  code: balanceTransferStatusReasonResponseSchema,
  message: s.string(),
});
