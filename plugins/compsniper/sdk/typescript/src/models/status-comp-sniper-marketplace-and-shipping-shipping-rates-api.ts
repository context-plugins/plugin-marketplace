import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCompSniperMarketplaceAndShippingShippingRatesApi = {
  Eligible: "eligible",
  Conditional: "conditional",
} as const;
export type StatusCompSniperMarketplaceAndShippingShippingRatesApi =
  | (typeof StatusCompSniperMarketplaceAndShippingShippingRatesApi)[keyof typeof StatusCompSniperMarketplaceAndShippingShippingRatesApi]
  | (string & {});

export const statusCompSniperMarketplaceAndShippingShippingRatesApiSchema: EnumSchema<StatusCompSniperMarketplaceAndShippingShippingRatesApi> =
  s.enumOf<StatusCompSniperMarketplaceAndShippingShippingRatesApi>(
    StatusCompSniperMarketplaceAndShippingShippingRatesApi,
  );
