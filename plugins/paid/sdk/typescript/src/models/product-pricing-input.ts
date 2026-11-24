import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-recurring-per-unit-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType,
  productPricingInputDiscriminatorMappingRecurringPerUnitBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-recurring-per-unit-billing-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** RecurringPerUnit variant */
export type ProductPricingInput = {
  /** Discriminator value: RecurringPerUnit @default "RecurringPerUnit" */
  pricingType?: "RecurringPerUnit";
  billingFrequency: ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType;
  pricePoints: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInputSchema: Schema<ProductPricingInput> = s.object<ProductPricingInput>(
  {
    pricingType: s.defaulted(s.literal("RecurringPerUnit"), "RecurringPerUnit"),
    billingFrequency: productPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingRecurringPerUnitBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => productSimplePricePointSchema)),
  },
  { additionalProperties: s.json() },
);
