import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingUsagePerUnitBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-usage-per-unit-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType,
  productPricingInputDiscriminatorMappingUsagePerUnitBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-usage-per-unit-billing-type.js";
import {
  productPricingInputDiscriminatorMappingUsagePerUnitSignalTypeSchema,
  type ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType,
} from "./product-pricing-input-discriminator-mapping-usage-per-unit-signal-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** UsagePerUnit variant */
export type ProductPricingInput4 = {
  /** Discriminator value: UsagePerUnit @default "UsagePerUnit" */
  pricingType?: "UsagePerUnit";
  eventName: string;
  signalType?: ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType;
  billingFrequency?: ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType.Arrears */
  billingType?: ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType;
  pricePoints: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput4Schema: Schema<ProductPricingInput4> = s.object<ProductPricingInput4>(
  {
    pricingType: s.defaulted(s.literal("UsagePerUnit"), "UsagePerUnit"),
    eventName: s.string(),
    signalType: s.optional(s.lazy(() => productPricingInputDiscriminatorMappingUsagePerUnitSignalTypeSchema)),
    billingFrequency: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsagePerUnitBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingUsagePerUnitBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType.Arrears,
    ),
    pricePoints: s.array(s.lazy(() => productSimplePricePointSchema)),
  },
  { additionalProperties: s.json() },
);
