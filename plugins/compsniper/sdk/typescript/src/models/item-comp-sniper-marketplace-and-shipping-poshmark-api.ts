import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemCompSniperMarketplaceAndShippingPoshmarkApi = {
  /** Poshmark listing ID (24-char hex) */
  listingId: string;
  url: string;
  title: string;
  /** Sale price in USD */
  soldPrice: number | null;
  /** Original listing price in USD */
  originalPrice: number | null;
  /** Reserved for item-level shipping evidence. null when Poshmark does not expose it. */
  shippingCost: number | null;
  brand: string | null;
  size: string | null;
  /** Department > Category path. */
  category: string | null;
  /** Item condition from Poshmark API. */
  condition: string | null;
  /** New With Tags flag */
  nwt: boolean;
  /** Color names from Poshmark API. */
  colors: string[];
  /** Full listing description text. */
  description: string | null;
  /** Public ISO timestamp when Poshmark marked the item sold. */
  soldAt: string | null;
  /** ISO timestamp when the item was first published. */
  listedAt: string | null;
  /** Days between listedAt and soldAt. null when either date is missing. */
  daysToSell: number | null;
  likesCount: number | null;
  /** Public comment count when exposed by Poshmark search. */
  commentsCount: number | null;
  /** Public share count when exposed by Poshmark search. */
  shareCount: number | null;
  sellerUsername: string | null;
  /** Seller city + state. Requires enrich=true. */
  sellerLocation: string | null;
  /** Approximate public seller sold count. Requires enrich=true. */
  sellerSoldCount: number | null;
  /** Seller's average ship time in days. Requires enrich=true. */
  sellerAvgShipTime: number | null;
  /** Listing thumbnail URL */
  thumbnailUrl: string | null;
  /** ISO timestamp when the listing was scraped */
  scrapedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemCompSniperMarketplaceAndShippingPoshmarkApiSchema: Schema<ItemCompSniperMarketplaceAndShippingPoshmarkApi> =
  s.object<ItemCompSniperMarketplaceAndShippingPoshmarkApi>(
    {
      listingId: s.string(),
      url: s.string(),
      title: s.string(),
      soldPrice: s.nullable(s.float64()),
      originalPrice: s.nullable(s.float64()),
      shippingCost: s.nullable(s.float64()),
      brand: s.nullable(s.string()),
      size: s.nullable(s.string()),
      category: s.nullable(s.string()),
      condition: s.nullable(s.string()),
      nwt: s.boolean(),
      colors: s.array(s.string()),
      description: s.nullable(s.string()),
      soldAt: s.nullable(s.string()),
      listedAt: s.nullable(s.string()),
      daysToSell: s.nullable(s.float64()),
      likesCount: s.nullable(s.float64()),
      commentsCount: s.nullable(s.float64()),
      shareCount: s.nullable(s.float64()),
      sellerUsername: s.nullable(s.string()),
      sellerLocation: s.nullable(s.string()),
      sellerSoldCount: s.nullable(s.float64()),
      sellerAvgShipTime: s.nullable(s.float64()),
      thumbnailUrl: s.nullable(s.string()),
      scrapedAt: s.string(),
    },
    { additionalProperties: s.json() },
  );
