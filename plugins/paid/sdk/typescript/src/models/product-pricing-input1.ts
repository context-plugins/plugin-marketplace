import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-recurring-graduated-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType,
  productPricingInputDiscriminatorMappingRecurringGraduatedBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-recurring-graduated-billing-type.js";
import { productTieredPricePointSchema, type ProductTieredPricePoint } from "./product-tiered-price-point.js";

/** RecurringGraduated variant */
export type ProductPricingInput1 = {
  /** Discriminator value: RecurringGraduated @default "RecurringGraduated" */
  pricingType?: "RecurringGraduated";
  billingFrequency: ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType;
  pricePoints: ProductTieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput1Schema: Schema<ProductPricingInput1> = s.object<ProductPricingInput1>(
  {
    pricingType: s.defaulted(s.literal("RecurringGraduated"), "RecurringGraduated"),
    billingFrequency: productPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingRecurringGraduatedBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => productTieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
