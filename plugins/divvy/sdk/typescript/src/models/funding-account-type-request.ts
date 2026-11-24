import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Funading account type for Payments API. */
export const FundingAccountTypeRequest = {
  BankAccount: "BANK_ACCOUNT",
  CardAccount: "CARD_ACCOUNT",
  Wallet: "WALLET",
  ApCard: "AP_CARD",
} as const;
export type FundingAccountTypeRequest =
  | (typeof FundingAccountTypeRequest)[keyof typeof FundingAccountTypeRequest]
  | (string & {});

export const fundingAccountTypeRequestSchema: EnumSchema<FundingAccountTypeRequest> =
  s.enumOf<FundingAccountTypeRequest>(FundingAccountTypeRequest);
