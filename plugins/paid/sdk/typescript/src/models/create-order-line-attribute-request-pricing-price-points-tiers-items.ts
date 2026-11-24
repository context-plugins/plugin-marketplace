import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingTypeSchema,
  type CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType,
} from "./create-order-line-attribute-request-pricing-price-points-tiers-items-tier-billing-type.js";

export type CreateOrderLineAttributeRequestPricingPricePointsTiersItems = {
  flatAmount?: number;
  index?: number;
  lowerBound?: number;
  number?: number;
  tierBillingType?: CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType;
  unitAmount?: number;
  upperBound?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrderLineAttributeRequestPricingPricePointsTiersItemsSchema: Schema<CreateOrderLineAttributeRequestPricingPricePointsTiersItems> =
  s.object<CreateOrderLineAttributeRequestPricingPricePointsTiersItems>(
    {
      flatAmount: s.optional(s.float64()),
      index: s.optional(s.float64()),
      lowerBound: s.optional(s.float64()),
      number: s.optional(s.float64()),
      tierBillingType: s.optional(
        s.lazy(() => createOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingTypeSchema),
      ),
      unitAmount: s.optional(s.float64()),
      upperBound: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
