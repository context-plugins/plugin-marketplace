import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  PricingInputDiscriminatorMappingOneTimePerUnitBillingType,
  pricingInputDiscriminatorMappingOneTimePerUnitBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-one-time-per-unit-billing-type.js";
import {
  pricingInputDiscriminatorMappingOneTimePerUnitFeeTypeSchema,
  type PricingInputDiscriminatorMappingOneTimePerUnitFeeType,
} from "./pricing-input-discriminator-mapping-one-time-per-unit-fee-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** OneTimePerUnit variant */
export type PricingInput10 = {
  /** Discriminator value: OneTimePerUnit @default "OneTimePerUnit" */
  pricingType?: "OneTimePerUnit";
  feeType?: PricingInputDiscriminatorMappingOneTimePerUnitFeeType;
  /** @default PricingInputDiscriminatorMappingOneTimePerUnitBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingOneTimePerUnitBillingType;
  pricePoints: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput10Schema: Schema<PricingInput10> = s.object<PricingInput10>(
  {
    pricingType: s.defaulted(s.literal("OneTimePerUnit"), "OneTimePerUnit"),
    feeType: s.optional(s.lazy(() => pricingInputDiscriminatorMappingOneTimePerUnitFeeTypeSchema)),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingOneTimePerUnitBillingTypeSchema,
      PricingInputDiscriminatorMappingOneTimePerUnitBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => simplePricePointSchema)),
  },
  { additionalProperties: s.json() },
);
