import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemCompSniperMarketplaceAndShippingTcGplayerApi = {
  title?: string | null;
  condition?: string | null;
  variant?: string | null;
  language?: string | null;
  quantity?: number | null;
  price?: number | null;
  shipping?: number | null;
  totalPrice?: number | null;
  soldAt?: string | null;
  listingType?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemCompSniperMarketplaceAndShippingTcGplayerApiSchema: Schema<ItemCompSniperMarketplaceAndShippingTcGplayerApi> =
  s.object<ItemCompSniperMarketplaceAndShippingTcGplayerApi>(
    {
      title: s.optionalNullable(s.string()),
      condition: s.optionalNullable(s.string()),
      variant: s.optionalNullable(s.string()),
      language: s.optionalNullable(s.string()),
      quantity: s.optionalNullable(s.int()),
      price: s.optionalNullable(s.float64()),
      shipping: s.optionalNullable(s.float64()),
      totalPrice: s.optionalNullable(s.float64()),
      soldAt: s.optionalNullable(s.string()),
      listingType: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
