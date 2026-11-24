import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerAttributionSchema, type CustomerAttribution } from "./unions/customer-attribution.js";
import { productAttributionSchema, type ProductAttribution } from "./unions/product-attribution.js";

/** cost variant */
export type Cost = {
  /** Discriminator value: cost @default "cost" */
  type?: "cost";
  /** Record time in RFC3339 format with timezone. Defaults to server receive time. */
  timestamp?: Date;
  customer: CustomerAttribution;
  product?: ProductAttribution;
  /** Free-form metadata for filtering and analytics. */
  metadata?: Record<string, unknown>;
  /** Cost amount in major units of `currency` (e.g. dollars). */
  amount: number;
  /** ISO 4217 currency code, e.g. "USD". */
  currency: string;
  /**
   * Optional vendor tag for analytics (e.g. "openai", "anthropic"). Not used for pricing in this
   * mode.
   */
  vendor?: string;
  /** Optional model tag for analytics (e.g. "gpt-4o-2024-08-06"). */
  model?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costSchema: Schema<Cost> = s.object<Cost>(
  {
    type: s.defaulted(s.literal("cost"), "cost"),
    timestamp: s.optional(s.dateTime()),
    customer: customerAttributionSchema,
    product: s.optional(s.lazy(() => productAttributionSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    amount: s.float64(),
    currency: s.string(),
    vendor: s.optional(s.string()),
    model: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
