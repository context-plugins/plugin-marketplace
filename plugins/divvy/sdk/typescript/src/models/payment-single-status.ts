import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentSingleStatus = {
  DisbursementFailedActionNeeded: "DISBURSEMENT_FAILED_ACTION_NEEDED",
  DisbursementFailedVendorBankRejected: "DISBURSEMENT_FAILED_VENDOR_BANK_REJECTED",
  FundingFailedActionNeeded: "FUNDING_FAILED_ACTION_NEEDED",
  Expiring: "EXPIRING",
  FundsEscheated: "FUNDS_ESCHEATED",
  Canceled: "CANCELED",
  FundingFailedVoided: "FUNDING_FAILED_VOIDED",
  Voided: "VOIDED",
  Cleared: "CLEARED",
  Delivered: "DELIVERED",
  DisbursementOnHold: "DISBURSEMENT_ON_HOLD",
  VoidPending: "VOID_PENDING",
  Sent: "SENT",
  DisbursementOnHoldPayerInReview: "DISBURSEMENT_ON_HOLD_PAYER_IN_REVIEW",
  Processed: "PROCESSED",
  FundingStarted: "FUNDING_STARTED",
  FundingOnHold: "FUNDING_ON_HOLD",
  WaitingOnApproval: "WAITING_ON_APPROVAL",
  Scheduled: "SCHEDULED",
  ReadyToFund: "READY_TO_FUND",
  CancellationInProgress: "CANCELLATION_IN_PROGRESS",
  Undefined: "UNDEFINED",
  PartiallyClaimed: "PARTIALLY_CLAIMED",
  PaidOffline: "PAID_OFFLINE",
} as const;
export type PaymentSingleStatus =
  | (typeof PaymentSingleStatus)[keyof typeof PaymentSingleStatus]
  | (string & {});

export const paymentSingleStatusSchema: EnumSchema<PaymentSingleStatus> =
  s.enumOf<PaymentSingleStatus>(PaymentSingleStatus);
