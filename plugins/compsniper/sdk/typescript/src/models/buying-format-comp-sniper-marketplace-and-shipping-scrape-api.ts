import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BuyingFormatCompSniperMarketplaceAndShippingScrapeApi = {
  Auction: "auction",
  BuyItNow: "buyItNow",
  AuctionWithBin: "auctionWithBIN",
} as const;
export type BuyingFormatCompSniperMarketplaceAndShippingScrapeApi =
  | (typeof BuyingFormatCompSniperMarketplaceAndShippingScrapeApi)[keyof typeof BuyingFormatCompSniperMarketplaceAndShippingScrapeApi]
  | (string & {});

export const buyingFormatCompSniperMarketplaceAndShippingScrapeApiSchema: EnumSchema<BuyingFormatCompSniperMarketplaceAndShippingScrapeApi> =
  s.enumOf<BuyingFormatCompSniperMarketplaceAndShippingScrapeApi>(
    BuyingFormatCompSniperMarketplaceAndShippingScrapeApi,
  );
