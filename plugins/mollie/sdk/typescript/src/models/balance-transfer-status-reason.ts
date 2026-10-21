import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A machine-readable code that indicates the reason for the transfer's status. */
export const BalanceTransferStatusReason = {
  RequestCreated: "request_created",
  Success: "success",
  SourceNotAllowed: "source_not_allowed",
  DestinationNotAllowed: "destination_not_allowed",
  InsufficientFunds: "insufficient_funds",
  InvalidSourceBalance: "invalid_source_balance",
  InvalidDestinationBalance: "invalid_destination_balance",
  TransferRequestExpired: "transfer_request_expired",
  TransferLimitReached: "transfer_limit_reached",
} as const;
export type BalanceTransferStatusReason =
  | (typeof BalanceTransferStatusReason)[keyof typeof BalanceTransferStatusReason]
  | (string & {});

export const balanceTransferStatusReasonSchema: EnumSchema<BalanceTransferStatusReason> =
  s.enumOf<BalanceTransferStatusReason>(BalanceTransferStatusReason);
