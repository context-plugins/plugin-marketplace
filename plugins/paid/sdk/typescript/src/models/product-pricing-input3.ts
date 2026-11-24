import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-recurring-percent-of-total-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType,
  productPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-recurring-percent-of-total-billing-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** RecurringPercentOfTotal variant */
export type ProductPricingInput3 = {
  /** Discriminator value: RecurringPercentOfTotal @default "RecurringPercentOfTotal" */
  pricingType?: "RecurringPercentOfTotal";
  percentageValue: number;
  billingFrequency: ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType;
  pricePoints?: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput3Schema: Schema<ProductPricingInput3> = s.object<ProductPricingInput3>(
  {
    pricingType: s.defaulted(s.literal("RecurringPercentOfTotal"), "RecurringPercentOfTotal"),
    percentageValue: s.float64(),
    billingFrequency: productPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType.Advance,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => productSimplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
