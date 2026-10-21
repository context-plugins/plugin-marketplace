import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the transaction for the `payment_method`. The status may change over time as
 * asynchronous processing events occur.
 */
export const TransactionStatus2 = {
  Processing: "processing",
  AuthorizationSucceeded: "authorization_succeeded",
  AuthorizationDeclined: "authorization_declined",
  AuthorizationFailed: "authorization_failed",
  AuthorizationVoided: "authorization_voided",
  AuthorizationVoidPending: "authorization_void_pending",
  CaptureSucceeded: "capture_succeeded",
  CapturePending: "capture_pending",
  BuyerApprovalPending: "buyer_approval_pending",
} as const;
export type TransactionStatus2 = (typeof TransactionStatus2)[keyof typeof TransactionStatus2] | (string & {});

export const transactionStatus2Schema: EnumSchema<TransactionStatus2> =
  s.enumOf<TransactionStatus2>(TransactionStatus2);
