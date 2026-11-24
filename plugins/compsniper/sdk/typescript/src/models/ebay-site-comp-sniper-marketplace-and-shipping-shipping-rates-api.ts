import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi = {
  EbayCom: "ebay.com",
} as const;
export type EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi =
  | (typeof EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi)[keyof typeof EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi]
  | (string & {});

export const ebaySiteCompSniperMarketplaceAndShippingShippingRatesApiSchema: EnumSchema<EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi> =
  s.enumOf<EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi>(
    EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi,
  );
