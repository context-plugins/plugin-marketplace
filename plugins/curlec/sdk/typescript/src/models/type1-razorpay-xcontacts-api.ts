import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1RazorpayXContactsApi = {
  Vendor: "vendor",
  Customer: "customer",
  Employee: "employee",
  Self: "self",
} as const;
export type Type1RazorpayXContactsApi =
  | (typeof Type1RazorpayXContactsApi)[keyof typeof Type1RazorpayXContactsApi]
  | (string & {});

export const type1RazorpayXContactsApiSchema: EnumSchema<Type1RazorpayXContactsApi> =
  s.enumOf<Type1RazorpayXContactsApi>(Type1RazorpayXContactsApi);
