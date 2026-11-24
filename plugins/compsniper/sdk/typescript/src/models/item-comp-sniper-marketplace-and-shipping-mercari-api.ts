import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusCompSniperMarketplaceAndShippingMercariApiSchema,
  type StatusCompSniperMarketplaceAndShippingMercariApi,
} from "./status-comp-sniper-marketplace-and-shipping-mercari-api.js";
import { sellerIdSchema, type SellerId } from "./unions/seller-id.js";

export type ItemCompSniperMarketplaceAndShippingMercariApi = {
  itemId: string;
  url: string;
  title: string;
  /** Dollars, 2 decimal places */
  price: string;
  /** @default "USD" */
  currency?: "USD";
  originalPrice: string | null;
  condition: string | null;
  conditionId: number | null;
  status: StatusCompSniperMarketplaceAndShippingMercariApi;
  imageUrl: string | null;
  thumbnailUrl: string | null;
  sellerId: SellerId;
  brand: string | null;
  categoryId: number | null;
  categoryName: string | null;
  /** @default "mercari" */
  marketplace?: "mercari";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemCompSniperMarketplaceAndShippingMercariApiSchema: Schema<ItemCompSniperMarketplaceAndShippingMercariApi> =
  s.object<ItemCompSniperMarketplaceAndShippingMercariApi>(
    {
      itemId: s.string(),
      url: s.string(),
      title: s.string(),
      price: s.string(),
      currency: s.defaulted(s.literal("USD"), "USD"),
      originalPrice: s.nullable(s.string()),
      condition: s.nullable(s.string()),
      conditionId: s.nullable(s.float64()),
      status: statusCompSniperMarketplaceAndShippingMercariApiSchema,
      imageUrl: s.nullable(s.string()),
      thumbnailUrl: s.nullable(s.string()),
      sellerId: sellerIdSchema,
      brand: s.nullable(s.string()),
      categoryId: s.nullable(s.float64()),
      categoryName: s.nullable(s.string()),
      marketplace: s.defaulted(s.literal("mercari"), "mercari"),
    },
    { additionalProperties: s.json() },
  );
