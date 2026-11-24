import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createOrderLineAttributeRequestPricingSchema,
  type CreateOrderLineAttributeRequestPricing,
} from "./create-order-line-attribute-request-pricing.js";

export type CreateOrderLineAttributeRequest = {
  name: string;
  quantity?: number;
  pricing: CreateOrderLineAttributeRequestPricing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrderLineAttributeRequestSchema: Schema<CreateOrderLineAttributeRequest> =
  s.object<CreateOrderLineAttributeRequest>(
    {
      name: s.string(),
      quantity: s.optional(s.int()),
      pricing: createOrderLineAttributeRequestPricingSchema,
    },
    { additionalProperties: s.json() },
  );
