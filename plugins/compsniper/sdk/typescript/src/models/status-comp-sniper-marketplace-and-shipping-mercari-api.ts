import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCompSniperMarketplaceAndShippingMercariApi = {
  Sold: "sold",
  Active: "active",
} as const;
export type StatusCompSniperMarketplaceAndShippingMercariApi =
  | (typeof StatusCompSniperMarketplaceAndShippingMercariApi)[keyof typeof StatusCompSniperMarketplaceAndShippingMercariApi]
  | (string & {});

export const statusCompSniperMarketplaceAndShippingMercariApiSchema: EnumSchema<StatusCompSniperMarketplaceAndShippingMercariApi> =
  s.enumOf<StatusCompSniperMarketplaceAndShippingMercariApi>(
    StatusCompSniperMarketplaceAndShippingMercariApi,
  );
