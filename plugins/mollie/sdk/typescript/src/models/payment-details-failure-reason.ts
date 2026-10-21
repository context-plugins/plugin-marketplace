import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A failure code to help understand why the payment failed. */
export const PaymentDetailsFailureReason = {
  AuthenticationAbandoned: "authentication_abandoned",
  AuthenticationFailed: "authentication_failed",
  AuthenticationRequired: "authentication_required",
  AuthenticationUnavailableAcs: "authentication_unavailable_acs",
  CardDeclined: "card_declined",
  CardExpired: "card_expired",
  InactiveCard: "inactive_card",
  InsufficientFunds: "insufficient_funds",
  InvalidCvv: "invalid_cvv",
  InvalidCardHolderName: "invalid_card_holder_name",
  InvalidCardNumber: "invalid_card_number",
  InvalidCardType: "invalid_card_type",
  PossibleFraud: "possible_fraud",
  RefusedByIssuer: "refused_by_issuer",
  UnknownReason: "unknown_reason",
} as const;
export type PaymentDetailsFailureReason =
  | (typeof PaymentDetailsFailureReason)[keyof typeof PaymentDetailsFailureReason]
  | (string & {});

export const paymentDetailsFailureReasonSchema: EnumSchema<PaymentDetailsFailureReason> =
  s.enumOf<PaymentDetailsFailureReason>(PaymentDetailsFailureReason);
