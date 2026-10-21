import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of bank account */
export const BankAccountType2 = {
  Checking: "checking",
  Savings: "savings",
} as const;
export type BankAccountType2 = (typeof BankAccountType2)[keyof typeof BankAccountType2] | (string & {});

export const bankAccountType2Schema: EnumSchema<BankAccountType2> =
  s.enumOf<BankAccountType2>(BankAccountType2);
