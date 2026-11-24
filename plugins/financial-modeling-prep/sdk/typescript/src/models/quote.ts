import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Quote = {
  symbol?: string;
  name?: string;
  price?: number;
  changesPercentage?: number;
  change?: number;
  dayLow?: number;
  dayHigh?: number;
  yearHigh?: number;
  yearLow?: number;
  marketCap?: number;
  priceAvg50?: number;
  priceAvg200?: number;
  volume?: number;
  avgVolume?: number;
  exchange?: string;
  open?: number;
  previousClose?: number;
  eps?: number;
  pe?: number;
  timestamp?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quoteSchema: Schema<Quote> = s.object<Quote>(
  {
    symbol: s.optional(s.string()),
    name: s.optional(s.string()),
    price: s.optional(s.float64()),
    changesPercentage: s.optional(s.float64()),
    change: s.optional(s.float64()),
    dayLow: s.optional(s.float64()),
    dayHigh: s.optional(s.float64()),
    yearHigh: s.optional(s.float64()),
    yearLow: s.optional(s.float64()),
    marketCap: s.optional(s.float64()),
    priceAvg50: s.optional(s.float64()),
    priceAvg200: s.optional(s.float64()),
    volume: s.optional(s.int()),
    avgVolume: s.optional(s.int()),
    exchange: s.optional(s.string()),
    open: s.optional(s.float64()),
    previousClose: s.optional(s.float64()),
    eps: s.optional(s.float64()),
    pe: s.optional(s.float64()),
    timestamp: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
