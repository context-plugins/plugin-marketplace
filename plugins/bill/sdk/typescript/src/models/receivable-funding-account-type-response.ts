import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Receivable funding account type for receivable payment API. */
export const ReceivableFundingAccountTypeResponse = {
  BankAccount: "BANK_ACCOUNT",
  CardAccount: "CARD_ACCOUNT",
} as const;
export type ReceivableFundingAccountTypeResponse =
  | (typeof ReceivableFundingAccountTypeResponse)[keyof typeof ReceivableFundingAccountTypeResponse]
  | (string & {});

export const receivableFundingAccountTypeResponseSchema: EnumSchema<ReceivableFundingAccountTypeResponse> =
  s.enumOf<ReceivableFundingAccountTypeResponse>(ReceivableFundingAccountTypeResponse);
