import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { activeItemInternalSchema, activeItemSchema, type ActiveItem } from "../active-item.js";
import { soldItemInternalSchema, soldItemSchema, type SoldItem } from "../sold-item.js";

export type ItemCompSniperMarketplaceAndShippingScrapeApi = SoldItem | ActiveItem;

export const itemCompSniperMarketplaceAndShippingScrapeApiInternalSchema: Schema<ItemCompSniperMarketplaceAndShippingScrapeApi> =
  s.of<ItemCompSniperMarketplaceAndShippingScrapeApi>(
    s.union([s.lazy(() => soldItemInternalSchema), s.lazy(() => activeItemInternalSchema)]),
  );

export const itemCompSniperMarketplaceAndShippingScrapeApiSchema: Schema<ItemCompSniperMarketplaceAndShippingScrapeApi> =
  s.lazySchema(() =>
    s.of<ItemCompSniperMarketplaceAndShippingScrapeApi>(
      s.union([s.lazy(() => soldItemSchema), s.lazy(() => activeItemSchema)]),
    ),
  );
