import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingUsageGraduatedBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-usage-graduated-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType,
  productPricingInputDiscriminatorMappingUsageGraduatedBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-usage-graduated-billing-type.js";
import {
  productPricingInputDiscriminatorMappingUsageGraduatedSignalTypeSchema,
  type ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType,
} from "./product-pricing-input-discriminator-mapping-usage-graduated-signal-type.js";
import { productTieredPricePointSchema, type ProductTieredPricePoint } from "./product-tiered-price-point.js";

/** UsageGraduated variant */
export type ProductPricingInput5 = {
  /** Discriminator value: UsageGraduated @default "UsageGraduated" */
  pricingType?: "UsageGraduated";
  eventName: string;
  signalType?: ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType;
  billingFrequency?: ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType.Arrears */
  billingType?: ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType;
  pricePoints: ProductTieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput5Schema: Schema<ProductPricingInput5> = s.object<ProductPricingInput5>(
  {
    pricingType: s.defaulted(s.literal("UsageGraduated"), "UsageGraduated"),
    eventName: s.string(),
    signalType: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsageGraduatedSignalTypeSchema),
    ),
    billingFrequency: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsageGraduatedBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingUsageGraduatedBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType.Arrears,
    ),
    pricePoints: s.array(s.lazy(() => productTieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
