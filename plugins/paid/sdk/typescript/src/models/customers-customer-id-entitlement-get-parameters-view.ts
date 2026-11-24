import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomersCustomerIdEntitlementGetParametersView = {
  All: "all",
  ActiveOnly: "active_only",
} as const;
export type CustomersCustomerIdEntitlementGetParametersView =
  | (typeof CustomersCustomerIdEntitlementGetParametersView)[keyof typeof CustomersCustomerIdEntitlementGetParametersView]
  | (string & {});

export const customersCustomerIdEntitlementGetParametersViewSchema: EnumSchema<CustomersCustomerIdEntitlementGetParametersView> =
  s.enumOf<CustomersCustomerIdEntitlementGetParametersView>(CustomersCustomerIdEntitlementGetParametersView);
