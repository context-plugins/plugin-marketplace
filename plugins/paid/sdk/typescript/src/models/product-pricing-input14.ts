import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-seat-based-prepaid-credits-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType,
  productPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-seat-based-prepaid-credits-billing-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** SeatBasedPrepaidCredits variant */
export type ProductPricingInput14 = {
  /** Discriminator value: SeatBasedPrepaidCredits @default "SeatBasedPrepaidCredits" */
  pricingType?: "SeatBasedPrepaidCredits";
  creditsCurrencyId: string;
  creditCost: number;
  unitValue?: number;
  billingFrequency: ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType.Advance */
  billingType?: ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType;
  pricePoints?: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput14Schema: Schema<ProductPricingInput14> = s.object<ProductPricingInput14>(
  {
    pricingType: s.defaulted(s.literal("SeatBasedPrepaidCredits"), "SeatBasedPrepaidCredits"),
    creditsCurrencyId: s.string(),
    creditCost: s.float64(),
    unitValue: s.optional(s.float64()),
    billingFrequency: productPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType.Advance,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => productSimplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
