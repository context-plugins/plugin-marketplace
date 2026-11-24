import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemCompSniperMarketplaceAndShippingMercariApiSchema,
  type ItemCompSniperMarketplaceAndShippingMercariApi,
} from "./item-comp-sniper-marketplace-and-shipping-mercari-api.js";
import { priceSummarySchema, type PriceSummary } from "./price-summary.js";

export type V1MercariResponse = {
  keyword: string;
  page: number;
  count: number;
  totalResults: number;
  totalItems: number;
  hasNextPage: boolean;
  items: ItemCompSniperMarketplaceAndShippingMercariApi[];
  /** @default "mercari" */
  marketplace?: "mercari";
  scrapedAt: string;
  summary: PriceSummary | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MercariResponseSchema: Schema<V1MercariResponse> = s.object<V1MercariResponse>(
  {
    keyword: s.string(),
    page: s.float64(),
    count: s.float64(),
    totalResults: s.float64(),
    totalItems: s.float64(),
    hasNextPage: s.boolean(),
    items: s.array(s.lazy(() => itemCompSniperMarketplaceAndShippingMercariApiSchema)),
    marketplace: s.defaulted(s.literal("mercari"), "mercari"),
    scrapedAt: s.string(),
    summary: s.nullable(s.lazy(() => priceSummarySchema)),
  },
  { additionalProperties: s.json() },
);
