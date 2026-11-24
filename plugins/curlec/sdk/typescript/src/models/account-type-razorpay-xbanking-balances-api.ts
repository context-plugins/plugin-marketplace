import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountTypeRazorpayXBankingBalancesApi = {
  CurrentAccount: "current_account",
  FixedDeposit: "fixed_deposit",
  RazorpayxLite: "razorpayx_lite",
} as const;
export type AccountTypeRazorpayXBankingBalancesApi =
  | (typeof AccountTypeRazorpayXBankingBalancesApi)[keyof typeof AccountTypeRazorpayXBankingBalancesApi]
  | (string & {});

export const accountTypeRazorpayXBankingBalancesApiSchema: EnumSchema<AccountTypeRazorpayXBankingBalancesApi> =
  s.enumOf<AccountTypeRazorpayXBankingBalancesApi>(AccountTypeRazorpayXBankingBalancesApi);
