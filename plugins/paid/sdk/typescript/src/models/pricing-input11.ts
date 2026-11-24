import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencySchema,
  type PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency,
} from "./pricing-input-discriminator-mapping-seat-based-per-unit-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType,
  pricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-seat-based-per-unit-billing-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** SeatBasedPerUnit variant */
export type PricingInput11 = {
  /** Discriminator value: SeatBasedPerUnit @default "SeatBasedPerUnit" */
  pricingType?: "SeatBasedPerUnit";
  billingFrequency: PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType;
  pricePoints: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput11Schema: Schema<PricingInput11> = s.object<PricingInput11>(
  {
    pricingType: s.defaulted(s.literal("SeatBasedPerUnit"), "SeatBasedPerUnit"),
    billingFrequency: pricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeSchema,
      PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => simplePricePointSchema)),
  },
  { additionalProperties: s.json() },
);
