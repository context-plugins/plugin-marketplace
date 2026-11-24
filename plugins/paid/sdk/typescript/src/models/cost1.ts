import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { costOverrideSchema, type CostOverride } from "./cost-override.js";
import { tokenUsageSchema, type TokenUsage } from "./token-usage.js";
import { customerAttributionSchema, type CustomerAttribution } from "./unions/customer-attribution.js";
import { productAttributionSchema, type ProductAttribution } from "./unions/product-attribution.js";

/** usage variant */
export type Cost1 = {
  /** Discriminator value: usage @default "usage" */
  type?: "usage";
  /** Record time in RFC3339 format with timezone. Defaults to server receive time. */
  timestamp?: Date;
  customer: CustomerAttribution;
  product?: ProductAttribution;
  /** Free-form metadata for filtering and analytics. */
  metadata?: Record<string, unknown>;
  /** Provider name, used together with `model` to look up pricing (e.g. "openai", "anthropic"). */
  vendor: string;
  /** Exact provider model ID (e.g. "gpt-4o-2024-08-06"). */
  model: string;
  usage: TokenUsage;
  /**
   * If supplied, overrides server-side pricing. The usage breakdown is still recorded for
   * analytics.
   */
  costOverride?: CostOverride;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cost1Schema: Schema<Cost1> = s.object<Cost1>(
  {
    type: s.defaulted(s.literal("usage"), "usage"),
    timestamp: s.optional(s.dateTime()),
    customer: customerAttributionSchema,
    product: s.optional(s.lazy(() => productAttributionSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    vendor: s.string(),
    model: s.string(),
    usage: tokenUsageSchema,
    costOverride: s.optional(s.lazy(() => costOverrideSchema)),
  },
  { additionalProperties: s.json() },
);
