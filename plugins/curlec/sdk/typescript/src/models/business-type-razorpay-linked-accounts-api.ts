import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Business type. Cannot be updated after creation. */
export const BusinessTypeRazorpayLinkedAccountsApi = {
  Route: "route",
} as const;
export type BusinessTypeRazorpayLinkedAccountsApi =
  | (typeof BusinessTypeRazorpayLinkedAccountsApi)[keyof typeof BusinessTypeRazorpayLinkedAccountsApi]
  | (string & {});

export const businessTypeRazorpayLinkedAccountsApiSchema: EnumSchema<BusinessTypeRazorpayLinkedAccountsApi> =
  s.enumOf<BusinessTypeRazorpayLinkedAccountsApi>(BusinessTypeRazorpayLinkedAccountsApi);
