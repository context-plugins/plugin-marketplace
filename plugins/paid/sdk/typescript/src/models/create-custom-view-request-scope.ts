import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'customer' (default): data is scoped to one viewing customer and the view is embeddable
 * per-customer. 'organization': data is org-wide; the view is internal-only (visible to org members
 * in Paid, never embeddable).
 */
export const CreateCustomViewRequestScope = {
  Customer: "customer",
  Organization: "organization",
} as const;
export type CreateCustomViewRequestScope =
  | (typeof CreateCustomViewRequestScope)[keyof typeof CreateCustomViewRequestScope]
  | (string & {});

export const createCustomViewRequestScopeSchema: EnumSchema<CreateCustomViewRequestScope> =
  s.enumOf<CreateCustomViewRequestScope>(CreateCustomViewRequestScope);
