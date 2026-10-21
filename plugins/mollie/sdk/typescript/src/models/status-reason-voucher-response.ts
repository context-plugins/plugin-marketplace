import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusReasonVoucherResponse = {
  ServiceFailed: "service_failed",
  InvalidOperation: "invalid_operation",
  AuthorizationError: "authorization_error",
  LoginFailedWithoutReason: "login_failed_without_reason",
  InvalidRetailer: "invalid_retailer",
  ReferToCardIssuer: "refer_to_card_issuer",
  CardDoesNotExist: "card_does_not_exist",
  ExpiredCard: "expired_card",
  CardIsBlocked: "card_is_blocked",
  InsufficientFunds: "insufficient_funds",
  InvalidCardId: "invalid_card_id",
  CardIsTransferred: "card_is_transferred",
  CardIsNotActive: "card_is_not_active",
  IncorrectPurchaseValue: "incorrect_purchase_value",
  CardNotAvailable: "card_not_available",
  WrongCurrency: "wrong_currency",
  LoginFailedUnknownUser: "login_failed_unknown_user",
  LoginFailedInvalidPassword: "login_failed_invalid_password",
  InvalidPin: "invalid_pin",
  InvalidEanCode: "invalid_ean_code",
} as const;
export type StatusReasonVoucherResponse =
  | (typeof StatusReasonVoucherResponse)[keyof typeof StatusReasonVoucherResponse]
  | (string & {});

export const statusReasonVoucherResponseSchema: EnumSchema<StatusReasonVoucherResponse> =
  s.enumOf<StatusReasonVoucherResponse>(StatusReasonVoucherResponse);
