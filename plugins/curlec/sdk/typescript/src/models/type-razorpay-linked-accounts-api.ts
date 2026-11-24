import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Account type. Always 'route' for Route marketplace accounts. */
export const TypeRazorpayLinkedAccountsApi = {
  Route: "route",
} as const;
export type TypeRazorpayLinkedAccountsApi =
  | (typeof TypeRazorpayLinkedAccountsApi)[keyof typeof TypeRazorpayLinkedAccountsApi]
  | (string & {});

export const typeRazorpayLinkedAccountsApiSchema: EnumSchema<TypeRazorpayLinkedAccountsApi> =
  s.enumOf<TypeRazorpayLinkedAccountsApi>(TypeRazorpayLinkedAccountsApi);
