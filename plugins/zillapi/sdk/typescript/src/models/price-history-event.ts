import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PriceHistoryEvent = {
  /** Event date (YYYY-MM-DD). */
  date?: string;
  /** e.g. "Listed for sale", "Sold". */
  event?: string;
  price?: number;
  priceChangeRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceHistoryEventSchema: Schema<PriceHistoryEvent> = s.object<PriceHistoryEvent>(
  {
    date: s.optional(s.string()),
    event: s.optional(s.string()),
    price: s.optional(s.float64()),
    priceChangeRate: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
