import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priceSummary2Schema, type PriceSummary2 } from "./price-summary2.js";
import {
  itemCompSniperMarketplaceAndShippingScrapeApiInternalSchema,
  itemCompSniperMarketplaceAndShippingScrapeApiSchema,
  type ItemCompSniperMarketplaceAndShippingScrapeApi,
} from "./unions/item-comp-sniper-marketplace-and-shipping-scrape-api.js";

export type ScrapeResponse = {
  keyword?: string;
  page?: number;
  /** Valid items on this page after baseline validation and filtering. */
  totalItems?: number;
  /** eBay's own reported total, e.g. '7,900'. */
  totalResults?: string | null;
  hasNextPage?: boolean;
  /** Sold-price intelligence. null for active searches. */
  summary?: PriceSummary2 | null;
  items?: ItemCompSniperMarketplaceAndShippingScrapeApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scrapeResponseProperties: s.Shape<ScrapeResponse> = {
  keyword: s.optional(s.string()),
  page: s.optional(s.int()),
  totalItems: s.optional(s.int()),
  totalResults: s.optionalNullable(s.string()),
  hasNextPage: s.optional(s.boolean()),
  summary: s.optionalNullable(s.lazy(() => priceSummary2Schema)),
  items: s.optional(s.array(s.lazy(() => itemCompSniperMarketplaceAndShippingScrapeApiInternalSchema))),
};

export const scrapeResponseInternalSchema: Schema<ScrapeResponse> = s.object<ScrapeResponse>(
  scrapeResponseProperties,
  { additionalProperties: s.json() },
);

export const scrapeResponseSchema: Schema<ScrapeResponse> = s.lazySchema(() =>
  s.object<ScrapeResponse>(
    {
      ...scrapeResponseProperties,
      items: s.optional(s.array(s.lazy(() => itemCompSniperMarketplaceAndShippingScrapeApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
