import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'customer': data is scoped to one viewing customer and the view is embeddable per-customer.
 * 'organization': data is org-wide and the view is internal-only.
 */
export const CustomViewDetailScope = {
  Customer: "customer",
  Organization: "organization",
} as const;
export type CustomViewDetailScope =
  | (typeof CustomViewDetailScope)[keyof typeof CustomViewDetailScope]
  | (string & {});

export const customViewDetailScopeSchema: EnumSchema<CustomViewDetailScope> =
  s.enumOf<CustomViewDetailScope>(CustomViewDetailScope);
