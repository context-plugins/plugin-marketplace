import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemCompSniperMarketplaceAndShippingGrailedApiSchema,
  type ItemCompSniperMarketplaceAndShippingGrailedApi,
} from "./item-comp-sniper-marketplace-and-shipping-grailed-api.js";

export type V1GrailedSoldResponse = {
  keyword?: string;
  page?: number;
  count?: number;
  marketplace?: string;
  totalResults?: number | null;
  totalItems?: number;
  hasNextPage?: boolean;
  scrapedAt?: string;
  summary?: Record<string, unknown> | null;
  items?: ItemCompSniperMarketplaceAndShippingGrailedApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1GrailedSoldResponseSchema: Schema<V1GrailedSoldResponse> = s.object<V1GrailedSoldResponse>(
  {
    keyword: s.optional(s.string()),
    page: s.optional(s.int()),
    count: s.optional(s.int()),
    marketplace: s.optional(s.string()),
    totalResults: s.optionalNullable(s.int()),
    totalItems: s.optional(s.int()),
    hasNextPage: s.optional(s.boolean()),
    scrapedAt: s.optional(s.string()),
    summary: s.optionalNullable(s.record(s.string(), s.unknown())),
    items: s.optional(s.array(s.lazy(() => itemCompSniperMarketplaceAndShippingGrailedApiSchema))),
  },
  { additionalProperties: s.json() },
);
