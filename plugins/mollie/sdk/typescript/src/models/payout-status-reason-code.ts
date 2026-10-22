import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A machine-readable code describing the reason for the payout's current status. */
export const PayoutStatusReasonCode = {
  Requested: "requested",
  Initiated: "initiated",
  ProcessingAtBank: "processing_at_bank",
  Completed: "completed",
  Canceled: "canceled",
  Failed: "failed",
  InsufficientFunds: "insufficient_funds",
  Returned: "returned",
  InvalidRequest: "invalid_request",
  OrganizationInactive: "organization_inactive",
  PayoutsBlocked: "payouts_blocked",
  BankProcessingFailed: "bank_processing_failed",
  BalanceNotFound: "balance_not_found",
  Expired: "expired",
} as const;
export type PayoutStatusReasonCode =
  | (typeof PayoutStatusReasonCode)[keyof typeof PayoutStatusReasonCode]
  | (string & {});

export const payoutStatusReasonCodeSchema: EnumSchema<PayoutStatusReasonCode> =
  s.enumOf<PayoutStatusReasonCode>(PayoutStatusReasonCode);
