import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemCompSniperMarketplaceAndShippingPoshmarkApiSchema,
  type ItemCompSniperMarketplaceAndShippingPoshmarkApi,
} from "./item-comp-sniper-marketplace-and-shipping-poshmark-api.js";
import { priceSummarySchema, type PriceSummary } from "./price-summary.js";

export type V1PoshmarkSoldResponse = {
  keyword: string;
  /** Current page number */
  page: number;
  /** Number of items returned in this response (up to 48) */
  totalItems: number;
  /** Whether more pages of results are available. */
  hasNextPage: boolean;
  items: ItemCompSniperMarketplaceAndShippingPoshmarkApi[];
  summary: PriceSummary | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PoshmarkSoldResponseSchema: Schema<V1PoshmarkSoldResponse> = s.object<V1PoshmarkSoldResponse>(
  {
    keyword: s.string(),
    page: s.float64(),
    totalItems: s.float64(),
    hasNextPage: s.boolean(),
    items: s.array(s.lazy(() => itemCompSniperMarketplaceAndShippingPoshmarkApiSchema)),
    summary: s.nullable(s.lazy(() => priceSummarySchema)),
  },
  { additionalProperties: s.json() },
);
