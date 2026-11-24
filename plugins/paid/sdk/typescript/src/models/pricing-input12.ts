import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencySchema,
  type PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency,
} from "./pricing-input-discriminator-mapping-seat-based-graduated-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType,
  pricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-seat-based-graduated-billing-type.js";
import { tieredPricePointSchema, type TieredPricePoint } from "./tiered-price-point.js";

/** SeatBasedGraduated variant */
export type PricingInput12 = {
  /** Discriminator value: SeatBasedGraduated @default "SeatBasedGraduated" */
  pricingType?: "SeatBasedGraduated";
  billingFrequency: PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType;
  pricePoints: TieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput12Schema: Schema<PricingInput12> = s.object<PricingInput12>(
  {
    pricingType: s.defaulted(s.literal("SeatBasedGraduated"), "SeatBasedGraduated"),
    billingFrequency: pricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeSchema,
      PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => tieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
