import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productPricePointOutputSchema, type ProductPricePointOutput } from "./product-price-point-output.js";
import {
  productPricingOutputPricingTypeSchema,
  type ProductPricingOutputPricingType,
} from "./product-pricing-output-pricing-type.js";
import {
  productPricingOutputSignalTypeSchema,
  type ProductPricingOutputSignalType,
} from "./product-pricing-output-signal-type.js";

export type ProductPricingOutput = {
  pricingType: ProductPricingOutputPricingType;
  chargeType: string;
  pricingModel?: string;
  eventName?: string;
  signalType?: ProductPricingOutputSignalType;
  billingFrequency?: string;
  billingType?: string;
  creditsCurrencyId?: string;
  creditCost?: number;
  unitValue?: number;
  percentageValue?: number;
  costPlusMultiplier?: number;
  pricePoints: ProductPricePointOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricingOutputSchema: Schema<ProductPricingOutput> = s.object<ProductPricingOutput>(
  {
    pricingType: productPricingOutputPricingTypeSchema,
    chargeType: s.string(),
    pricingModel: s.optional(s.string()),
    eventName: s.optional(s.string()),
    signalType: s.optional(s.lazy(() => productPricingOutputSignalTypeSchema)),
    billingFrequency: s.optional(s.string()),
    billingType: s.optional(s.string()),
    creditsCurrencyId: s.optional(s.string()),
    creditCost: s.optional(s.float64()),
    unitValue: s.optional(s.float64()),
    percentageValue: s.optional(s.float64()),
    costPlusMultiplier: s.optional(s.float64()),
    pricePoints: s.array(s.lazy(() => productPricePointOutputSchema)),
  },
  { additionalProperties: s.json() },
);
