import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemCompSniperMarketplaceAndShippingDepopApi = {
  productId?: string;
  url?: string;
  title?: string;
  description?: string | null;
  price?: number | null;
  originalPrice?: number | null;
  shippingPrice?: number | null;
  currency?: string | null;
  brand?: string | null;
  category?: string | null;
  sizes?: string[];
  condition?: string | null;
  gender?: string | null;
  colors?: string[];
  quantity?: number | null;
  sellerUsername?: string | null;
  location?: string | null;
  country?: string | null;
  imageUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemCompSniperMarketplaceAndShippingDepopApiSchema: Schema<ItemCompSniperMarketplaceAndShippingDepopApi> =
  s.object<ItemCompSniperMarketplaceAndShippingDepopApi>(
    {
      productId: s.optional(s.string()),
      url: s.optional(s.string()),
      title: s.optional(s.string()),
      description: s.optionalNullable(s.string()),
      price: s.optionalNullable(s.float64()),
      originalPrice: s.optionalNullable(s.float64()),
      shippingPrice: s.optionalNullable(s.float64()),
      currency: s.optionalNullable(s.string()),
      brand: s.optionalNullable(s.string()),
      category: s.optionalNullable(s.string()),
      sizes: s.optional(s.array(s.string())),
      condition: s.optionalNullable(s.string()),
      gender: s.optionalNullable(s.string()),
      colors: s.optional(s.array(s.string())),
      quantity: s.optionalNullable(s.int()),
      sellerUsername: s.optionalNullable(s.string()),
      location: s.optionalNullable(s.string()),
      country: s.optionalNullable(s.string()),
      imageUrl: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
