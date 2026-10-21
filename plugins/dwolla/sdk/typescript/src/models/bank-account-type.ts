import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankAccountType = {
  Checking: "checking",
  Savings: "savings",
} as const;
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType] | (string & {});

export const bankAccountTypeSchema: EnumSchema<BankAccountType> = s.enumOf<BankAccountType>(BankAccountType);
