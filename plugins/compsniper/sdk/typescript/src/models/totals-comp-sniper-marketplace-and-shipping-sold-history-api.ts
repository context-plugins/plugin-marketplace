import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { averageShippingSchema, type AverageShipping } from "./average-shipping.js";
import { averageSoldPriceSchema, type AverageSoldPrice } from "./average-sold-price.js";
import { maxSoldPriceSchema, type MaxSoldPrice } from "./max-sold-price.js";
import { minSoldPriceSchema, type MinSoldPrice } from "./min-sold-price.js";
import { totalSalesSchema, type TotalSales } from "./total-sales.js";

/**
 * Whole-search totals for the date range (same on every page, before relevance cleanup or
 * singleUnitOnly). totalSold is an upper bound on the number of rows. Null when there are no sales.
 */
export type TotalsCompSniperMarketplaceAndShippingSoldHistoryApi = {
  totalSold?: number | null;
  totalSellers?: number | null;
  averageSoldPrice?: AverageSoldPrice | null;
  minSoldPrice?: MinSoldPrice | null;
  maxSoldPrice?: MaxSoldPrice | null;
  averageShipping?: AverageShipping | null;
  totalSales?: TotalSales | null;
  freeShippingPercent?: string | null;
  sellThroughPercent?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const totalsCompSniperMarketplaceAndShippingSoldHistoryApiSchema: Schema<TotalsCompSniperMarketplaceAndShippingSoldHistoryApi> =
  s.object<TotalsCompSniperMarketplaceAndShippingSoldHistoryApi>(
    {
      totalSold: s.optionalNullable(s.int()),
      totalSellers: s.optionalNullable(s.int()),
      averageSoldPrice: s.optionalNullable(s.lazy(() => averageSoldPriceSchema)),
      minSoldPrice: s.optionalNullable(s.lazy(() => minSoldPriceSchema)),
      maxSoldPrice: s.optionalNullable(s.lazy(() => maxSoldPriceSchema)),
      averageShipping: s.optionalNullable(s.lazy(() => averageShippingSchema)),
      totalSales: s.optionalNullable(s.lazy(() => totalSalesSchema)),
      freeShippingPercent: s.optionalNullable(s.string()),
      sellThroughPercent: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
