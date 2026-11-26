import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Receivable funding account type for receivable payment API. */
export const ReceivableFundingAccountTypeRequestDto = {
  BankAccount: "BANK_ACCOUNT",
} as const;
export type ReceivableFundingAccountTypeRequestDto =
  | (typeof ReceivableFundingAccountTypeRequestDto)[keyof typeof ReceivableFundingAccountTypeRequestDto]
  | (string & {});

export const receivableFundingAccountTypeRequestDtoSchema: EnumSchema<ReceivableFundingAccountTypeRequestDto> =
  s.enumOf<ReceivableFundingAccountTypeRequestDto>(ReceivableFundingAccountTypeRequestDto);
