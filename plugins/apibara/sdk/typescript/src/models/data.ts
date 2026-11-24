import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auctionSchema, type Auction } from "./auction.js";

export type Data = {
  make?: string;
  model?: string | null;
  year?: number | null;
  damage?: string | null;
  auction?: Auction | null;
  recordsCount?: number;
  averageSoldPrice?: number | null;
  minSoldPrice?: number | null;
  maxSoldPrice?: number | null;
  currency?: string;
  p25SoldPrice?: number | null;
  medianSoldPrice?: number | null;
  p75SoldPrice?: number | null;
};

const dataProperties: s.Shape<Data> = {
  make: s.optional(s.string()),
  model: s.optionalNullable(s.string()),
  year: s.optionalNullable(s.int()),
  damage: s.optionalNullable(s.string()),
  auction: s.optionalNullable(s.lazy(() => auctionSchema)),
  recordsCount: s.optional(s.int()),
  averageSoldPrice: s.optionalNullable(s.float64()),
  minSoldPrice: s.optionalNullable(s.float64()),
  maxSoldPrice: s.optionalNullable(s.float64()),
  currency: s.optional(s.string()),
  p25SoldPrice: s.optionalNullable(s.float64()),
  medianSoldPrice: s.optionalNullable(s.float64()),
  p75SoldPrice: s.optionalNullable(s.float64()),
  _keysMap: {
    recordsCount: "records_count",
    averageSoldPrice: "average_sold_price",
    minSoldPrice: "min_sold_price",
    maxSoldPrice: "max_sold_price",
    p25SoldPrice: "p25_sold_price",
    medianSoldPrice: "median_sold_price",
    p75SoldPrice: "p75_sold_price",
  },
};

export const dataInternalSchema: Schema<Data> = s.object<Data>(dataProperties);

export const dataSchema: Schema<Data> = s.lazySchema(() =>
  s.object<Data>({
    ...dataProperties,
    recordsCount: s.optional(s.int().check(s.gte(0))),
  }),
);
