import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted
 * as a compatibility alias for recentlySold.
 */
export const SortOrderCompSniperMarketplaceAndShippingMercariApi = {
  BestMatch: "bestMatch",
  Newest: "newest",
  LowestPrice: "lowestPrice",
  HighestPrice: "highestPrice",
  RecentlySold: "recentlySold",
  MostPopular: "mostPopular",
} as const;
export type SortOrderCompSniperMarketplaceAndShippingMercariApi =
  | (typeof SortOrderCompSniperMarketplaceAndShippingMercariApi)[keyof typeof SortOrderCompSniperMarketplaceAndShippingMercariApi]
  | (string & {});

export const sortOrderCompSniperMarketplaceAndShippingMercariApiSchema: EnumSchema<SortOrderCompSniperMarketplaceAndShippingMercariApi> =
  s.enumOf<SortOrderCompSniperMarketplaceAndShippingMercariApi>(
    SortOrderCompSniperMarketplaceAndShippingMercariApi,
  );
