import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeRazorpayVirtualAccountsApi = {
  BankAccount: "bank_account",
  Vpa: "vpa",
} as const;
export type TypeRazorpayVirtualAccountsApi =
  | (typeof TypeRazorpayVirtualAccountsApi)[keyof typeof TypeRazorpayVirtualAccountsApi]
  | (string & {});

export const typeRazorpayVirtualAccountsApiSchema: EnumSchema<TypeRazorpayVirtualAccountsApi> =
  s.enumOf<TypeRazorpayVirtualAccountsApi>(TypeRazorpayVirtualAccountsApi);
