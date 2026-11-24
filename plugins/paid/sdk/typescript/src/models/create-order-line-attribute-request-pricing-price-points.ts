import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createOrderLineAttributeRequestPricingPricePointsTiersItemsSchema,
  type CreateOrderLineAttributeRequestPricingPricePointsTiersItems,
} from "./create-order-line-attribute-request-pricing-price-points-tiers-items.js";

/**
 * Single flat price point for this order attribute override. Do not send a currency-keyed map here.
 */
export type CreateOrderLineAttributeRequestPricingPricePoints = {
  currency?: string;
  unitPrice: number;
  minQuantity?: number;
  includedQuantity?: number;
  tiers?: CreateOrderLineAttributeRequestPricingPricePointsTiersItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrderLineAttributeRequestPricingPricePointsSchema: Schema<CreateOrderLineAttributeRequestPricingPricePoints> =
  s.object<CreateOrderLineAttributeRequestPricingPricePoints>(
    {
      currency: s.optional(s.string()),
      unitPrice: s.float64(),
      minQuantity: s.optional(s.float64()),
      includedQuantity: s.optional(s.float64()),
      tiers: s.optional(
        s.array(s.lazy(() => createOrderLineAttributeRequestPricingPricePointsTiersItemsSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
