import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-seat-based-graduated-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType,
  productPricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-seat-based-graduated-billing-type.js";
import { productTieredPricePointSchema, type ProductTieredPricePoint } from "./product-tiered-price-point.js";

/** SeatBasedGraduated variant */
export type ProductPricingInput12 = {
  /** Discriminator value: SeatBasedGraduated @default "SeatBasedGraduated" */
  pricingType?: "SeatBasedGraduated";
  billingFrequency: ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType;
  pricePoints: ProductTieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput12Schema: Schema<ProductPricingInput12> = s.object<ProductPricingInput12>(
  {
    pricingType: s.defaulted(s.literal("SeatBasedGraduated"), "SeatBasedGraduated"),
    billingFrequency: productPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => productTieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
