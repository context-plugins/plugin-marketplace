import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemCompSniperMarketplaceAndShippingTcGplayerApiSchema,
  type ItemCompSniperMarketplaceAndShippingTcGplayerApi,
} from "./item-comp-sniper-marketplace-and-shipping-tc-gplayer-api.js";
import { otherMatchSchema, type OtherMatch } from "./other-match.js";
import { priceHistorySchema, type PriceHistory } from "./price-history.js";
import { productSchema, type Product } from "./product.js";
import { salesHistorySchema, type SalesHistory } from "./sales-history.js";

export type V1TcgplayerSoldResponse = {
  keyword?: string;
  marketplace?: string;
  product?: Product | null;
  otherMatches?: (OtherMatch | null)[];
  salesHistory?: SalesHistory;
  totalSales?: number | null;
  totalItems?: number;
  items?: ItemCompSniperMarketplaceAndShippingTcGplayerApi[];
  priceHistory?: PriceHistory[] | null;
  summary?: Record<string, unknown> | null;
  scrapedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TcgplayerSoldResponseSchema: Schema<V1TcgplayerSoldResponse> =
  s.object<V1TcgplayerSoldResponse>(
    {
      keyword: s.optional(s.string()),
      marketplace: s.optional(s.string()),
      product: s.optionalNullable(s.lazy(() => productSchema)),
      otherMatches: s.optional(s.array(s.nullable(s.lazy(() => otherMatchSchema)))),
      salesHistory: s.optional(s.lazy(() => salesHistorySchema)),
      totalSales: s.optionalNullable(s.int()),
      totalItems: s.optional(s.int()),
      items: s.optional(s.array(s.lazy(() => itemCompSniperMarketplaceAndShippingTcGplayerApiSchema))),
      priceHistory: s.optionalNullable(s.array(s.lazy(() => priceHistorySchema))),
      summary: s.optionalNullable(s.record(s.string(), s.unknown())),
      scrapedAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
