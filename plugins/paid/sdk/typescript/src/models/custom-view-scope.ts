import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'customer': data is scoped to one viewing customer and the view is embeddable per-customer.
 * 'organization': data is org-wide and the view is internal-only.
 */
export const CustomViewScope = {
  Customer: "customer",
  Organization: "organization",
} as const;
export type CustomViewScope = (typeof CustomViewScope)[keyof typeof CustomViewScope] | (string & {});

export const customViewScopeSchema: EnumSchema<CustomViewScope> = s.enumOf<CustomViewScope>(CustomViewScope);
