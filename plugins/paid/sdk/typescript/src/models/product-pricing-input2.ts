import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingRecurringVolumeBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-recurring-volume-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType,
  productPricingInputDiscriminatorMappingRecurringVolumeBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-recurring-volume-billing-type.js";
import { productTieredPricePointSchema, type ProductTieredPricePoint } from "./product-tiered-price-point.js";

/** RecurringVolume variant */
export type ProductPricingInput2 = {
  /** Discriminator value: RecurringVolume @default "RecurringVolume" */
  pricingType?: "RecurringVolume";
  billingFrequency: ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType;
  pricePoints: ProductTieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput2Schema: Schema<ProductPricingInput2> = s.object<ProductPricingInput2>(
  {
    pricingType: s.defaulted(s.literal("RecurringVolume"), "RecurringVolume"),
    billingFrequency: productPricingInputDiscriminatorMappingRecurringVolumeBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingRecurringVolumeBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => productTieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
