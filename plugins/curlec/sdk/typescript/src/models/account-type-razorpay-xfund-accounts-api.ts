import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountTypeRazorpayXFundAccountsApi = {
  BankAccount: "bank_account",
  Vpa: "vpa",
  Card: "card",
  Wallet: "wallet",
} as const;
export type AccountTypeRazorpayXFundAccountsApi =
  | (typeof AccountTypeRazorpayXFundAccountsApi)[keyof typeof AccountTypeRazorpayXFundAccountsApi]
  | (string & {});

export const accountTypeRazorpayXFundAccountsApiSchema: EnumSchema<AccountTypeRazorpayXFundAccountsApi> =
  s.enumOf<AccountTypeRazorpayXFundAccountsApi>(AccountTypeRazorpayXFundAccountsApi);
