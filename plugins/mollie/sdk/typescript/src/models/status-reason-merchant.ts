import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusReasonMerchant = {
  MerchantIdNotFound: "merchant_id_not_found",
  MerchantAccountClosed: "merchant_account_closed",
  TerminalIdNotFound: "terminal_id_not_found",
  TerminalClosed: "terminal_closed",
  InvalidCategoryCode: "invalid_category_code",
  InvalidCurrency: "invalid_currency",
  MissingCvv2Cvc2: "missing_cvv2_cvc2",
  Cvv2NotAllowed: "cvv2_not_allowed",
  MerchantNotRegisteredVbv: "merchant_not_registered_vbv",
  MerchantNotRegisteredForAmex: "merchant_not_registered_for_amex",
  TransactionNotPermittedAtTerminal: "transaction_not_permitted_at_terminal",
  AgreementTerminalNotRelated: "agreement_terminal_not_related",
  InvalidProcessorId: "invalid_processor_id",
  InvalidMerchantData: "invalid_merchant_data",
  SubMerchantAccountClosed: "sub_merchant_account_closed",
} as const;
export type StatusReasonMerchant =
  | (typeof StatusReasonMerchant)[keyof typeof StatusReasonMerchant]
  | (string & {});

export const statusReasonMerchantSchema: EnumSchema<StatusReasonMerchant> =
  s.enumOf<StatusReasonMerchant>(StatusReasonMerchant);
