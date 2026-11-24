import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemCompSniperMarketplaceAndShippingDepopApiSchema,
  type ItemCompSniperMarketplaceAndShippingDepopApi,
} from "./item-comp-sniper-marketplace-and-shipping-depop-api.js";

export type V1DepopListingsResponse = {
  keyword?: string;
  page?: number;
  count?: number;
  marketplace?: string;
  totalListings?: number | null;
  totalItems?: number;
  hasNextPage?: boolean;
  scrapedAt?: string;
  summary?: Record<string, unknown> | null;
  country?: string;
  nextCursor?: string | null;
  items?: ItemCompSniperMarketplaceAndShippingDepopApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DepopListingsResponseSchema: Schema<V1DepopListingsResponse> =
  s.object<V1DepopListingsResponse>(
    {
      keyword: s.optional(s.string()),
      page: s.optional(s.int()),
      count: s.optional(s.int()),
      marketplace: s.optional(s.string()),
      totalListings: s.optionalNullable(s.int()),
      totalItems: s.optional(s.int()),
      hasNextPage: s.optional(s.boolean()),
      scrapedAt: s.optional(s.string()),
      summary: s.optionalNullable(s.record(s.string(), s.unknown())),
      country: s.optional(s.string()),
      nextCursor: s.optionalNullable(s.string()),
      items: s.optional(s.array(s.lazy(() => itemCompSniperMarketplaceAndShippingDepopApiSchema))),
    },
    { additionalProperties: s.json() },
  );
