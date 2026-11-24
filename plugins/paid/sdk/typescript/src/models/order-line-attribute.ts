import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderLineAttributePricingSchema,
  type OrderLineAttributePricing,
} from "./order-line-attribute-pricing.js";

export type OrderLineAttribute = {
  agentAttributeId?: string;
  quantity?: number;
  currency?: string;
  pricing?: OrderLineAttributePricing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderLineAttributeSchema: Schema<OrderLineAttribute> = s.object<OrderLineAttribute>(
  {
    agentAttributeId: s.optional(s.string()),
    quantity: s.optional(s.float64()),
    currency: s.optional(s.string()),
    pricing: s.optional(s.lazy(() => orderLineAttributePricingSchema)),
  },
  { additionalProperties: s.json() },
);
