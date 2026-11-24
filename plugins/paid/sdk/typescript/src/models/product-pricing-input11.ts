import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-seat-based-per-unit-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType,
  productPricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-seat-based-per-unit-billing-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** SeatBasedPerUnit variant */
export type ProductPricingInput11 = {
  /** Discriminator value: SeatBasedPerUnit @default "SeatBasedPerUnit" */
  pricingType?: "SeatBasedPerUnit";
  billingFrequency: ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType;
  pricePoints: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput11Schema: Schema<ProductPricingInput11> = s.object<ProductPricingInput11>(
  {
    pricingType: s.defaulted(s.literal("SeatBasedPerUnit"), "SeatBasedPerUnit"),
    billingFrequency: productPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => productSimplePricePointSchema)),
  },
  { additionalProperties: s.json() },
);
