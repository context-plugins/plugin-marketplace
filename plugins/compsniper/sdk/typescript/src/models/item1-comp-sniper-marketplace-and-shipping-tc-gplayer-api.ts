import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item1CompSniperMarketplaceAndShippingTcGplayerApi = {
  listingId?: string | null;
  price?: number | null;
  shipping?: number | null;
  totalPrice?: number | null;
  condition?: string | null;
  variant?: string | null;
  language?: string | null;
  quantity?: number | null;
  sellerName?: string | null;
  sellerRating?: number | null;
  sellerSales?: number | null;
  sellerLocation?: string | null;
  goldSeller?: boolean | null;
  verifiedSeller?: boolean | null;
  directSeller?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item1CompSniperMarketplaceAndShippingTcGplayerApiSchema: Schema<Item1CompSniperMarketplaceAndShippingTcGplayerApi> =
  s.object<Item1CompSniperMarketplaceAndShippingTcGplayerApi>(
    {
      listingId: s.optionalNullable(s.string()),
      price: s.optionalNullable(s.float64()),
      shipping: s.optionalNullable(s.float64()),
      totalPrice: s.optionalNullable(s.float64()),
      condition: s.optionalNullable(s.string()),
      variant: s.optionalNullable(s.string()),
      language: s.optionalNullable(s.string()),
      quantity: s.optionalNullable(s.int()),
      sellerName: s.optionalNullable(s.string()),
      sellerRating: s.optionalNullable(s.float64()),
      sellerSales: s.optionalNullable(s.int()),
      sellerLocation: s.optionalNullable(s.string()),
      goldSeller: s.optionalNullable(s.boolean()),
      verifiedSeller: s.optionalNullable(s.boolean()),
      directSeller: s.optionalNullable(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
