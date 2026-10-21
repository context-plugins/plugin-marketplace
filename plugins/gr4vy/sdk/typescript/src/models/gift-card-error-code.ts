import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Gift card error codes.
 *
 * Gr4vy normalised gift card error codes. Keep the naming and style in line with those in the
 * connectors framework.
 *
 * If new codes are added, append them at the end or amend public simulator documentation:
 * https://docs.gr4vy.com/guides/features/gift-cards/simulator
 */
export const GiftCardErrorCode = {
  InvalidGiftCard: "invalid_gift_card",
  ExpiredCard: "expired_card",
  InactiveCard: "inactive_card",
  InvalidServiceCredentials: "invalid_service_credentials",
  InvalidAmount: "invalid_amount",
  IncorrectCurrency: "incorrect_currency",
  InsufficientFunds: "insufficient_funds",
  InvalidServiceConfiguration: "invalid_service_configuration",
  OperationCanceled: "operation_canceled",
  ServiceError: "service_error",
  ServiceNetworkError: "service_network_error",
  UnknownError: "unknown_error",
  MaxGiftCardsReached: "max_gift_cards_reached",
  SuspectedFraud: "suspected_fraud",
  CanceledPaymentMethod: "canceled_payment_method",
  DuplicateTransaction: "duplicate_transaction",
  UnexpectedState: "unexpected_state",
} as const;
export type GiftCardErrorCode = (typeof GiftCardErrorCode)[keyof typeof GiftCardErrorCode] | (string & {});

export const giftCardErrorCodeSchema: EnumSchema<GiftCardErrorCode> =
  s.enumOf<GiftCardErrorCode>(GiftCardErrorCode);
