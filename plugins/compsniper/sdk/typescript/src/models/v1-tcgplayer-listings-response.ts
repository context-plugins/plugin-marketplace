import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item1CompSniperMarketplaceAndShippingTcGplayerApiSchema,
  type Item1CompSniperMarketplaceAndShippingTcGplayerApi,
} from "./item1-comp-sniper-marketplace-and-shipping-tc-gplayer-api.js";
import { otherMatchSchema, type OtherMatch } from "./other-match.js";
import { productSchema, type Product } from "./product.js";

export type V1TcgplayerListingsResponse = {
  keyword?: string;
  page?: number;
  count?: number;
  marketplace?: string;
  product?: Product | null;
  otherMatches?: (OtherMatch | null)[];
  totalListings?: number | null;
  totalItems?: number;
  hasNextPage?: boolean;
  items?: Item1CompSniperMarketplaceAndShippingTcGplayerApi[];
  scrapedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TcgplayerListingsResponseSchema: Schema<V1TcgplayerListingsResponse> =
  s.object<V1TcgplayerListingsResponse>(
    {
      keyword: s.optional(s.string()),
      page: s.optional(s.int()),
      count: s.optional(s.int()),
      marketplace: s.optional(s.string()),
      product: s.optionalNullable(s.lazy(() => productSchema)),
      otherMatches: s.optional(s.array(s.nullable(s.lazy(() => otherMatchSchema)))),
      totalListings: s.optionalNullable(s.int()),
      totalItems: s.optional(s.int()),
      hasNextPage: s.optional(s.boolean()),
      items: s.optional(s.array(s.lazy(() => item1CompSniperMarketplaceAndShippingTcGplayerApiSchema))),
      scrapedAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
