import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingRecurringVolumeBillingFrequencySchema,
  type PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency,
} from "./pricing-input-discriminator-mapping-recurring-volume-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingRecurringVolumeBillingType,
  pricingInputDiscriminatorMappingRecurringVolumeBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-recurring-volume-billing-type.js";
import { tieredPricePointSchema, type TieredPricePoint } from "./tiered-price-point.js";

/** RecurringVolume variant */
export type PricingInput2 = {
  /** Discriminator value: RecurringVolume @default "RecurringVolume" */
  pricingType?: "RecurringVolume";
  billingFrequency: PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingRecurringVolumeBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingRecurringVolumeBillingType;
  pricePoints: TieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput2Schema: Schema<PricingInput2> = s.object<PricingInput2>(
  {
    pricingType: s.defaulted(s.literal("RecurringVolume"), "RecurringVolume"),
    billingFrequency: pricingInputDiscriminatorMappingRecurringVolumeBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingRecurringVolumeBillingTypeSchema,
      PricingInputDiscriminatorMappingRecurringVolumeBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => tieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
