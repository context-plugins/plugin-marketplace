import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencySchema,
  type PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency,
} from "./pricing-input-discriminator-mapping-seat-based-volume-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingSeatBasedVolumeBillingType,
  pricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-seat-based-volume-billing-type.js";
import { tieredPricePointSchema, type TieredPricePoint } from "./tiered-price-point.js";

/** SeatBasedVolume variant */
export type PricingInput13 = {
  /** Discriminator value: SeatBasedVolume @default "SeatBasedVolume" */
  pricingType?: "SeatBasedVolume";
  billingFrequency: PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingSeatBasedVolumeBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingSeatBasedVolumeBillingType;
  pricePoints: TieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput13Schema: Schema<PricingInput13> = s.object<PricingInput13>(
  {
    pricingType: s.defaulted(s.literal("SeatBasedVolume"), "SeatBasedVolume"),
    billingFrequency: pricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeSchema,
      PricingInputDiscriminatorMappingSeatBasedVolumeBillingType.Advance,
    ),
    pricePoints: s.array(s.lazy(() => tieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
