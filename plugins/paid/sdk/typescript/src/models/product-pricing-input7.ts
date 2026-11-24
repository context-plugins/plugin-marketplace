import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-usage-prepaid-credits-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType,
  productPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-usage-prepaid-credits-billing-type.js";
import {
  productPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeSchema,
  type ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType,
} from "./product-pricing-input-discriminator-mapping-usage-prepaid-credits-signal-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** UsagePrepaidCredits variant */
export type ProductPricingInput7 = {
  /** Discriminator value: UsagePrepaidCredits @default "UsagePrepaidCredits" */
  pricingType?: "UsagePrepaidCredits";
  eventName: string;
  signalType?: ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType;
  creditsCurrencyId: string;
  creditCost: number;
  unitValue?: number;
  billingFrequency?: ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType.Arrears */
  billingType?: ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType;
  pricePoints?: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput7Schema: Schema<ProductPricingInput7> = s.object<ProductPricingInput7>(
  {
    pricingType: s.defaulted(s.literal("UsagePrepaidCredits"), "UsagePrepaidCredits"),
    eventName: s.string(),
    signalType: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeSchema),
    ),
    creditsCurrencyId: s.string(),
    creditCost: s.float64(),
    unitValue: s.optional(s.float64()),
    billingFrequency: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType.Arrears,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => productSimplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
