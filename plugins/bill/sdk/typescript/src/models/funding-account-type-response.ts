import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Funading account type for Payments API. */
export const FundingAccountTypeResponse = {
  BankAccount: "BANK_ACCOUNT",
  CardAccount: "CARD_ACCOUNT",
  Wallet: "WALLET",
  ApCard: "AP_CARD",
  Undefined: "UNDEFINED",
} as const;
export type FundingAccountTypeResponse =
  | (typeof FundingAccountTypeResponse)[keyof typeof FundingAccountTypeResponse]
  | (string & {});

export const fundingAccountTypeResponseSchema: EnumSchema<FundingAccountTypeResponse> =
  s.enumOf<FundingAccountTypeResponse>(FundingAccountTypeResponse);
