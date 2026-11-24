import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-seat-based-volume-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType,
  productPricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-seat-based-volume-billing-type.js";
import { productTieredPricePointSchema, type ProductTieredPricePoint } from "./product-tiered-price-point.js";

/** SeatBasedVolume variant */
export type ProductPricingInput13 = {
  /** Discriminator value: SeatBasedVolume @default "SeatBasedVolume" */
  pricingType?: "SeatBasedVolume";
  billingFrequency: ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType;
  pricePoints: ProductTieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput13Schema: Schema<ProductPricingInput13> = s.object<ProductPricingInput13>(
  {
    pricingType: s.defaulted(s.literal("SeatBasedVolume"), "SeatBasedVolume"),
    billingFrequency: productPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => productTieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
