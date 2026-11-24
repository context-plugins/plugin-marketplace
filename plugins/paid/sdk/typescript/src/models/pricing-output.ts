import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingOutputPricingTypeSchema,
  type PricingOutputPricingType,
} from "./pricing-output-pricing-type.js";
import { pricingOutputSignalTypeSchema, type PricingOutputSignalType } from "./pricing-output-signal-type.js";
import { pricingPricePointOutputSchema, type PricingPricePointOutput } from "./pricing-price-point-output.js";

export type PricingOutput = {
  pricingType: PricingOutputPricingType;
  chargeType: string;
  pricingModel?: string;
  eventName?: string;
  signalType?: PricingOutputSignalType;
  billingFrequency?: string;
  billingType?: string;
  creditsCurrencyId?: string;
  creditCost?: number;
  unitValue?: number;
  percentageValue?: number;
  costPlusMultiplier?: number;
  pricePoints: PricingPricePointOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingOutputSchema: Schema<PricingOutput> = s.object<PricingOutput>(
  {
    pricingType: pricingOutputPricingTypeSchema,
    chargeType: s.string(),
    pricingModel: s.optional(s.string()),
    eventName: s.optional(s.string()),
    signalType: s.optional(s.lazy(() => pricingOutputSignalTypeSchema)),
    billingFrequency: s.optional(s.string()),
    billingType: s.optional(s.string()),
    creditsCurrencyId: s.optional(s.string()),
    creditCost: s.optional(s.float64()),
    unitValue: s.optional(s.float64()),
    percentageValue: s.optional(s.float64()),
    costPlusMultiplier: s.optional(s.float64()),
    pricePoints: s.array(s.lazy(() => pricingPricePointOutputSchema)),
  },
  { additionalProperties: s.json() },
);
