import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingUsageVolumeBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-usage-volume-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingUsageVolumeBillingType,
  productPricingInputDiscriminatorMappingUsageVolumeBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-usage-volume-billing-type.js";
import {
  productPricingInputDiscriminatorMappingUsageVolumeSignalTypeSchema,
  type ProductPricingInputDiscriminatorMappingUsageVolumeSignalType,
} from "./product-pricing-input-discriminator-mapping-usage-volume-signal-type.js";
import { productTieredPricePointSchema, type ProductTieredPricePoint } from "./product-tiered-price-point.js";

/** UsageVolume variant */
export type ProductPricingInput6 = {
  /** Discriminator value: UsageVolume @default "UsageVolume" */
  pricingType?: "UsageVolume";
  eventName: string;
  signalType?: ProductPricingInputDiscriminatorMappingUsageVolumeSignalType;
  billingFrequency?: ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingUsageVolumeBillingType.Arrears */
  billingType?: ProductPricingInputDiscriminatorMappingUsageVolumeBillingType;
  pricePoints: ProductTieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput6Schema: Schema<ProductPricingInput6> = s.object<ProductPricingInput6>(
  {
    pricingType: s.defaulted(s.literal("UsageVolume"), "UsageVolume"),
    eventName: s.string(),
    signalType: s.optional(s.lazy(() => productPricingInputDiscriminatorMappingUsageVolumeSignalTypeSchema)),
    billingFrequency: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsageVolumeBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingUsageVolumeBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingUsageVolumeBillingType.Arrears,
    ),
    pricePoints: s.array(s.lazy(() => productTieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
