import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Sold-price intelligence. null for active searches. */
export type PriceSummary2 = {
  /** Items with a usable sold price. */
  count?: number;
  currency?: string | null;
  median?: number;
  mean?: number;
  min?: number;
  max?: number;
  /** Lower bound of the realistic range. */
  p25?: number;
  /** Upper bound of the realistic range. */
  p75?: number;
  avgShipping?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceSummary2Schema: Schema<PriceSummary2> = s.object<PriceSummary2>(
  {
    count: s.optional(s.int()),
    currency: s.optionalNullable(s.string()),
    median: s.optional(s.float64()),
    mean: s.optional(s.float64()),
    min: s.optional(s.float64()),
    max: s.optional(s.float64()),
    p25: s.optional(s.float64()),
    p75: s.optional(s.float64()),
    avgShipping: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
