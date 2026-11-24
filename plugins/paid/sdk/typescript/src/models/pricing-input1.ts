import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencySchema,
  type PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency,
} from "./pricing-input-discriminator-mapping-recurring-graduated-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingRecurringGraduatedBillingType,
  pricingInputDiscriminatorMappingRecurringGraduatedBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-recurring-graduated-billing-type.js";
import { tieredPricePointSchema, type TieredPricePoint } from "./tiered-price-point.js";

/** RecurringGraduated variant */
export type PricingInput1 = {
  /** Discriminator value: RecurringGraduated @default "RecurringGraduated" */
  pricingType?: "RecurringGraduated";
  billingFrequency: PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingRecurringGraduatedBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingRecurringGraduatedBillingType;
  pricePoints: TieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput1Schema: Schema<PricingInput1> = s.object<PricingInput1>(
  {
    pricingType: s.defaulted(s.literal("RecurringGraduated"), "RecurringGraduated"),
    billingFrequency: pricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingRecurringGraduatedBillingTypeSchema,
      PricingInputDiscriminatorMappingRecurringGraduatedBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => tieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
