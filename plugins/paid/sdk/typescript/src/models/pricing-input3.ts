import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencySchema,
  type PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency,
} from "./pricing-input-discriminator-mapping-recurring-percent-of-total-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType,
  pricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-recurring-percent-of-total-billing-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** RecurringPercentOfTotal variant */
export type PricingInput3 = {
  /** Discriminator value: RecurringPercentOfTotal @default "RecurringPercentOfTotal" */
  pricingType?: "RecurringPercentOfTotal";
  percentageValue: number;
  billingFrequency: PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType;
  pricePoints?: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput3Schema: Schema<PricingInput3> = s.object<PricingInput3>(
  {
    pricingType: s.defaulted(s.literal("RecurringPercentOfTotal"), "RecurringPercentOfTotal"),
    percentageValue: s.float64(),
    billingFrequency: pricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeSchema,
      PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType.Advance,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => simplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
