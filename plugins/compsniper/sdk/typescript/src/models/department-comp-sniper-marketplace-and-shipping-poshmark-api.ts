import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Poshmark department filter */
export const DepartmentCompSniperMarketplaceAndShippingPoshmarkApi = {
  All: "all",
  Women: "women",
  Men: "men",
  Kids: "kids",
  Home: "home",
  Pets: "pets",
  Electronics: "electronics",
} as const;
export type DepartmentCompSniperMarketplaceAndShippingPoshmarkApi =
  | (typeof DepartmentCompSniperMarketplaceAndShippingPoshmarkApi)[keyof typeof DepartmentCompSniperMarketplaceAndShippingPoshmarkApi]
  | (string & {});

export const departmentCompSniperMarketplaceAndShippingPoshmarkApiSchema: EnumSchema<DepartmentCompSniperMarketplaceAndShippingPoshmarkApi> =
  s.enumOf<DepartmentCompSniperMarketplaceAndShippingPoshmarkApi>(
    DepartmentCompSniperMarketplaceAndShippingPoshmarkApi,
  );
