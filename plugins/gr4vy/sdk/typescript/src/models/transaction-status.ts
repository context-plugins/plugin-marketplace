import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionStatus = {
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
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus] | (string & {});

export const transactionStatusSchema: EnumSchema<TransactionStatus> =
  s.enumOf<TransactionStatus>(TransactionStatus);
