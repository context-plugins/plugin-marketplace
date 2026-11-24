import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingUsageCostPlusBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-usage-cost-plus-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType,
  productPricingInputDiscriminatorMappingUsageCostPlusBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-usage-cost-plus-billing-type.js";
import {
  productPricingInputDiscriminatorMappingUsageCostPlusSignalTypeSchema,
  type ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType,
} from "./product-pricing-input-discriminator-mapping-usage-cost-plus-signal-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** UsageCostPlus variant */
export type ProductPricingInput9 = {
  /** Discriminator value: UsageCostPlus @default "UsageCostPlus" */
  pricingType?: "UsageCostPlus";
  costPlusMultiplier: number;
  signalType?: ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType;
  billingFrequency?: ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType.Arrears */
  billingType?: ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType;
  pricePoints?: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput9Schema: Schema<ProductPricingInput9> = s.object<ProductPricingInput9>(
  {
    pricingType: s.defaulted(s.literal("UsageCostPlus"), "UsageCostPlus"),
    costPlusMultiplier: s.float64(),
    signalType: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsageCostPlusSignalTypeSchema),
    ),
    billingFrequency: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsageCostPlusBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingUsageCostPlusBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType.Arrears,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => productSimplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
