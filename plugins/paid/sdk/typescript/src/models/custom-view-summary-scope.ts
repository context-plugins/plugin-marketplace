import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'customer': data is scoped to one viewing customer and the view is embeddable per-customer.
 * 'organization': data is org-wide and the view is internal-only.
 */
export const CustomViewSummaryScope = {
  Customer: "customer",
  Organization: "organization",
} as const;
export type CustomViewSummaryScope =
  | (typeof CustomViewSummaryScope)[keyof typeof CustomViewSummaryScope]
  | (string & {});

export const customViewSummaryScopeSchema: EnumSchema<CustomViewSummaryScope> =
  s.enumOf<CustomViewSummaryScope>(CustomViewSummaryScope);
