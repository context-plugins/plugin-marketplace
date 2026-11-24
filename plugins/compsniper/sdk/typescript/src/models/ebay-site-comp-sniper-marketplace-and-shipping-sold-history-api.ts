import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** eBay marketplace */
export const EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi = {
  EbayCom: "ebay.com",
  EbayCoUk: "ebay.co.uk",
  EbayComAu: "ebay.com.au",
  EbayCa: "ebay.ca",
  EbayDe: "ebay.de",
  EbayFr: "ebay.fr",
  EbayIt: "ebay.it",
  EbayEs: "ebay.es",
} as const;
export type EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi =
  | (typeof EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi)[keyof typeof EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi]
  | (string & {});

export const ebaySiteCompSniperMarketplaceAndShippingSoldHistoryApiSchema: EnumSchema<EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi> =
  s.enumOf<EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi>(
    EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi,
  );
