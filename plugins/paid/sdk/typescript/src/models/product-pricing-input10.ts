import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType,
  productPricingInputDiscriminatorMappingOneTimePerUnitBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-one-time-per-unit-billing-type.js";
import {
  productPricingInputDiscriminatorMappingOneTimePerUnitFeeTypeSchema,
  type ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType,
} from "./product-pricing-input-discriminator-mapping-one-time-per-unit-fee-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** OneTimePerUnit variant */
export type ProductPricingInput10 = {
  /** Discriminator value: OneTimePerUnit @default "OneTimePerUnit" */
  pricingType?: "OneTimePerUnit";
  feeType?: ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType;
  /** @default ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType;
  pricePoints: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput10Schema: Schema<ProductPricingInput10> = s.object<ProductPricingInput10>(
  {
    pricingType: s.defaulted(s.literal("OneTimePerUnit"), "OneTimePerUnit"),
    feeType: s.optional(s.lazy(() => productPricingInputDiscriminatorMappingOneTimePerUnitFeeTypeSchema)),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingOneTimePerUnitBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => productSimplePricePointSchema)),
  },
  { additionalProperties: s.json() },
);
