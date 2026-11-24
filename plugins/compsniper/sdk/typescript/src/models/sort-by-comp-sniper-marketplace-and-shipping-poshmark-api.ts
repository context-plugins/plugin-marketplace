import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sort order for results */
export const SortByCompSniperMarketplaceAndShippingPoshmarkApi = {
  SoldRecently: "sold_recently",
  PriceAsc: "price_asc",
  PriceDesc: "price_desc",
  Likes: "likes",
} as const;
export type SortByCompSniperMarketplaceAndShippingPoshmarkApi =
  | (typeof SortByCompSniperMarketplaceAndShippingPoshmarkApi)[keyof typeof SortByCompSniperMarketplaceAndShippingPoshmarkApi]
  | (string & {});

export const sortByCompSniperMarketplaceAndShippingPoshmarkApiSchema: EnumSchema<SortByCompSniperMarketplaceAndShippingPoshmarkApi> =
  s.enumOf<SortByCompSniperMarketplaceAndShippingPoshmarkApi>(
    SortByCompSniperMarketplaceAndShippingPoshmarkApi,
  );
