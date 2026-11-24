import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingUsageVolumeBillingFrequencySchema,
  type PricingInputDiscriminatorMappingUsageVolumeBillingFrequency,
} from "./pricing-input-discriminator-mapping-usage-volume-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingUsageVolumeBillingType,
  pricingInputDiscriminatorMappingUsageVolumeBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-usage-volume-billing-type.js";
import {
  pricingInputDiscriminatorMappingUsageVolumeSignalTypeSchema,
  type PricingInputDiscriminatorMappingUsageVolumeSignalType,
} from "./pricing-input-discriminator-mapping-usage-volume-signal-type.js";
import { tieredPricePointSchema, type TieredPricePoint } from "./tiered-price-point.js";

/** UsageVolume variant */
export type PricingInput6 = {
  /** Discriminator value: UsageVolume @default "UsageVolume" */
  pricingType?: "UsageVolume";
  eventName: string;
  signalType?: PricingInputDiscriminatorMappingUsageVolumeSignalType;
  billingFrequency?: PricingInputDiscriminatorMappingUsageVolumeBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingUsageVolumeBillingType.Arrears */
  billingType?: PricingInputDiscriminatorMappingUsageVolumeBillingType;
  pricePoints: TieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput6Schema: Schema<PricingInput6> = s.object<PricingInput6>(
  {
    pricingType: s.defaulted(s.literal("UsageVolume"), "UsageVolume"),
    eventName: s.string(),
    signalType: s.optional(s.lazy(() => pricingInputDiscriminatorMappingUsageVolumeSignalTypeSchema)),
    billingFrequency: s.optional(
      s.lazy(() => pricingInputDiscriminatorMappingUsageVolumeBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingUsageVolumeBillingTypeSchema,
      PricingInputDiscriminatorMappingUsageVolumeBillingType.Arrears,
    ),
    pricePoints: s.array(s.lazy(() => tieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
