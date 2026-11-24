import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { averageShippingSchema, type AverageShipping } from "./average-shipping.js";
import { averageSoldPriceSchema, type AverageSoldPrice } from "./average-sold-price.js";
import { recordTypeSchema, type RecordType } from "./record-type.js";
import { soldPriceSchema, type SoldPrice } from "./sold-price.js";
import { totalSalesSchema, type TotalSales } from "./total-sales.js";

export type Result = {
  itemId?: string;
  title?: string | null;
  extendedTitle?: string | null;
  itemUrl?: string | null;
  imageUrl?: string | null;
  recordType?: RecordType;
  soldUnits?: number;
  averageSoldPrice?: AverageSoldPrice | null;
  totalSales?: TotalSales | null;
  averageShipping?: AverageShipping | null;
  soldPrice?: SoldPrice | null;
  soldDate?: string | null;
  lastSoldDate?: string;
  listingFormat?: string | null;
  bids?: number | null;
  condition?: string | null;
  conditionId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    itemId: s.optional(s.string()),
    title: s.optionalNullable(s.string()),
    extendedTitle: s.optionalNullable(s.string()),
    itemUrl: s.optionalNullable(s.string()),
    imageUrl: s.optionalNullable(s.string()),
    recordType: s.optional(s.lazy(() => recordTypeSchema)),
    soldUnits: s.optional(s.int()),
    averageSoldPrice: s.optionalNullable(s.lazy(() => averageSoldPriceSchema)),
    totalSales: s.optionalNullable(s.lazy(() => totalSalesSchema)),
    averageShipping: s.optionalNullable(s.lazy(() => averageShippingSchema)),
    soldPrice: s.optionalNullable(s.lazy(() => soldPriceSchema)),
    soldDate: s.optionalNullable(s.string()),
    lastSoldDate: s.optional(s.string()),
    listingFormat: s.optionalNullable(s.string()),
    bids: s.optionalNullable(s.int()),
    condition: s.optionalNullable(s.string()),
    conditionId: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
