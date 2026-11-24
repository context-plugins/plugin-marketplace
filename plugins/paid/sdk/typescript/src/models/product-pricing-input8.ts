import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencySchema,
  type ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency,
} from "./product-pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-billing-frequency.js";
import {
  ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType,
  productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeSchema,
} from "./product-pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-billing-type.js";
import {
  productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsSchema,
  type ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems,
} from "./product-pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-credit-unit-brackets-items.js";
import {
  productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputSchema,
  type ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput,
} from "./product-pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-pricing-input.js";
import {
  productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeSchema,
  type ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType,
} from "./product-pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-signal-type.js";
import { productSimplePricePointSchema, type ProductSimplePricePoint } from "./product-simple-price-point.js";

/** UsageBracketedPrepaidCredits variant */
export type ProductPricingInput8 = {
  /** Discriminator value: UsageBracketedPrepaidCredits @default "UsageBracketedPrepaidCredits" */
  pricingType?: "UsageBracketedPrepaidCredits";
  eventName: string;
  signalType?: ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType;
  creditsCurrencyId?: string;
  unitValue?: number;
  overageUnitPrice?: number;
  creditRolloverAmount?: number;
  pricingInput: ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput;
  creditUnitBrackets: ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems[];
  billingFrequency?: ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /**
   * @default ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType.Arrears
   */
  billingType?: ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType;
  pricePoints?: ProductSimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingInput8Schema: Schema<ProductPricingInput8> = s.object<ProductPricingInput8>(
  {
    pricingType: s.defaulted(s.literal("UsageBracketedPrepaidCredits"), "UsageBracketedPrepaidCredits"),
    eventName: s.string(),
    signalType: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeSchema),
    ),
    creditsCurrencyId: s.optional(s.string()),
    unitValue: s.optional(s.float64()),
    overageUnitPrice: s.optional(s.float64()),
    creditRolloverAmount: s.optional(s.float64()),
    pricingInput: productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputSchema,
    creditUnitBrackets: s.array(
      s.lazy(() =>
        productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsSchema,
      ),
    ),
    billingFrequency: s.optional(
      s.lazy(() => productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeSchema,
      ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType.Arrears,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => productSimplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
