import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PriceHistory = {
  date?: string;
  variant?: string;
  condition?: string;
  language?: string;
  marketPrice?: number;
  quantitySold?: number;
  transactionCount?: number;
  lowSalePrice?: number;
  highSalePrice?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceHistorySchema: Schema<PriceHistory> = s.object<PriceHistory>(
  {
    date: s.optional(s.string()),
    variant: s.optional(s.string()),
    condition: s.optional(s.string()),
    language: s.optional(s.string()),
    marketPrice: s.optional(s.float64()),
    quantitySold: s.optional(s.int()),
    transactionCount: s.optional(s.int()),
    lowSalePrice: s.optional(s.float64()),
    highSalePrice: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
