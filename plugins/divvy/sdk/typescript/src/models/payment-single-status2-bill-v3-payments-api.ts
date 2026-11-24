import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Unified payment status. This field provides BILL payment lifecycle updates based on the `status`
 * and `disbursementStatus` values in the response.
 *
 * See [Single status payment values](https://developer.bill.com/docs/single-status-payment-values)
 * in the Guides section for the list of available values.
 */
export const PaymentSingleStatus2BillV3PaymentsApi = {
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
export type PaymentSingleStatus2BillV3PaymentsApi =
  | (typeof PaymentSingleStatus2BillV3PaymentsApi)[keyof typeof PaymentSingleStatus2BillV3PaymentsApi]
  | (string & {});

export const paymentSingleStatus2BillV3PaymentsApiSchema: EnumSchema<PaymentSingleStatus2BillV3PaymentsApi> =
  s.enumOf<PaymentSingleStatus2BillV3PaymentsApi>(PaymentSingleStatus2BillV3PaymentsApi);
