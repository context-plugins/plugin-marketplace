import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = SavingAccount 3 = CurrentAccount 5 = CreditCardAccount 7 = DepositAccount */
export const BankAccountType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
} as const;
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType] | (number & {});

export const bankAccountTypeSchema: EnumSchema<BankAccountType> = s.enumOf<BankAccountType>(BankAccountType);
