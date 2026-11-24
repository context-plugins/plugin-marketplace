import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType = {
  Flat: "flat",
  PerUnit: "perUnit",
} as const;
export type CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType =
  | (typeof CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType)[keyof typeof CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType]
  | (string & {});

export const createOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingTypeSchema: EnumSchema<CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType> =
  s.enumOf<CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType>(
    CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType,
  );
