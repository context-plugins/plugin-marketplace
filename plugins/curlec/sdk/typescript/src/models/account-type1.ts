import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountType1 = {
  CurrentAccount: "current_account",
  FixedDeposit: "fixed_deposit",
  RazorpayxLite: "razorpayx_lite",
} as const;
export type AccountType1 = (typeof AccountType1)[keyof typeof AccountType1] | (string & {});

export const accountType1Schema: EnumSchema<AccountType1> = s.enumOf<AccountType1>(AccountType1);
