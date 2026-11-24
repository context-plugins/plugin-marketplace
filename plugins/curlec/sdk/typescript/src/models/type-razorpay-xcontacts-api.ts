import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Built-in types only via API; custom types must be created on Dashboard first */
export const TypeRazorpayXContactsApi = {
  Vendor: "vendor",
  Customer: "customer",
  Employee: "employee",
  Self: "self",
} as const;
export type TypeRazorpayXContactsApi =
  | (typeof TypeRazorpayXContactsApi)[keyof typeof TypeRazorpayXContactsApi]
  | (string & {});

export const typeRazorpayXContactsApiSchema: EnumSchema<TypeRazorpayXContactsApi> =
  s.enumOf<TypeRazorpayXContactsApi>(TypeRazorpayXContactsApi);
