import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of allowed payer. */
export const Type2RazorpayVirtualAccountsApi = {
  BankAccount: "bank_account",
  Vpa: "vpa",
} as const;
export type Type2RazorpayVirtualAccountsApi =
  | (typeof Type2RazorpayVirtualAccountsApi)[keyof typeof Type2RazorpayVirtualAccountsApi]
  | (string & {});

export const type2RazorpayVirtualAccountsApiSchema: EnumSchema<Type2RazorpayVirtualAccountsApi> =
  s.enumOf<Type2RazorpayVirtualAccountsApi>(Type2RazorpayVirtualAccountsApi);
