import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Condition filter */
export const ItemConditionCompSniperMarketplaceAndShippingMercariApi = {
  Any: "any",
  New: "new",
  LikeNew: "likeNew",
  Good: "good",
  Fair: "fair",
  Poor: "poor",
} as const;
export type ItemConditionCompSniperMarketplaceAndShippingMercariApi =
  | (typeof ItemConditionCompSniperMarketplaceAndShippingMercariApi)[keyof typeof ItemConditionCompSniperMarketplaceAndShippingMercariApi]
  | (string & {});

export const itemConditionCompSniperMarketplaceAndShippingMercariApiSchema: EnumSchema<ItemConditionCompSniperMarketplaceAndShippingMercariApi> =
  s.enumOf<ItemConditionCompSniperMarketplaceAndShippingMercariApi>(
    ItemConditionCompSniperMarketplaceAndShippingMercariApi,
  );
