import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1RazorpayVirtualAccountsApi = {
  Vpa: "vpa",
} as const;
export type Type1RazorpayVirtualAccountsApi =
  | (typeof Type1RazorpayVirtualAccountsApi)[keyof typeof Type1RazorpayVirtualAccountsApi]
  | (string & {});

export const type1RazorpayVirtualAccountsApiSchema: EnumSchema<Type1RazorpayVirtualAccountsApi> =
  s.enumOf<Type1RazorpayVirtualAccountsApi>(Type1RazorpayVirtualAccountsApi);
