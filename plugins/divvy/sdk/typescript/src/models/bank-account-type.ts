import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** BankAccountType Enum. */
export const BankAccountType = {
  Checking: "CHECKING",
  Savings: "SAVINGS",
} as const;
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType] | (string & {});

export const bankAccountTypeSchema: EnumSchema<BankAccountType> = s.enumOf<BankAccountType>(BankAccountType);
