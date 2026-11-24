import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencySchema,
  type PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency,
} from "./pricing-input-discriminator-mapping-recurring-per-unit-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingRecurringPerUnitBillingType,
  pricingInputDiscriminatorMappingRecurringPerUnitBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-recurring-per-unit-billing-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** RecurringPerUnit variant */
export type PricingInput = {
  /** Discriminator value: RecurringPerUnit @default "RecurringPerUnit" */
  pricingType?: "RecurringPerUnit";
  billingFrequency: PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingRecurringPerUnitBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingRecurringPerUnitBillingType;
  pricePoints: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInputSchema: Schema<PricingInput> = s.object<PricingInput>(
  {
    pricingType: s.defaulted(s.literal("RecurringPerUnit"), "RecurringPerUnit"),
    billingFrequency: pricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingRecurringPerUnitBillingTypeSchema,
      PricingInputDiscriminatorMappingRecurringPerUnitBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => simplePricePointSchema)),
  },
  { additionalProperties: s.json() },
);
