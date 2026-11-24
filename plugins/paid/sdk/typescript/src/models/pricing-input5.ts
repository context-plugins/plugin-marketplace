import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingUsageGraduatedBillingFrequencySchema,
  type PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency,
} from "./pricing-input-discriminator-mapping-usage-graduated-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingUsageGraduatedBillingType,
  pricingInputDiscriminatorMappingUsageGraduatedBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-usage-graduated-billing-type.js";
import {
  pricingInputDiscriminatorMappingUsageGraduatedSignalTypeSchema,
  type PricingInputDiscriminatorMappingUsageGraduatedSignalType,
} from "./pricing-input-discriminator-mapping-usage-graduated-signal-type.js";
import { tieredPricePointSchema, type TieredPricePoint } from "./tiered-price-point.js";

/** UsageGraduated variant */
export type PricingInput5 = {
  /** Discriminator value: UsageGraduated @default "UsageGraduated" */
  pricingType?: "UsageGraduated";
  eventName: string;
  signalType?: PricingInputDiscriminatorMappingUsageGraduatedSignalType;
  billingFrequency?: PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingUsageGraduatedBillingType.Arrears */
  billingType?: PricingInputDiscriminatorMappingUsageGraduatedBillingType;
  pricePoints: TieredPricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput5Schema: Schema<PricingInput5> = s.object<PricingInput5>(
  {
    pricingType: s.defaulted(s.literal("UsageGraduated"), "UsageGraduated"),
    eventName: s.string(),
    signalType: s.optional(s.lazy(() => pricingInputDiscriminatorMappingUsageGraduatedSignalTypeSchema)),
    billingFrequency: s.optional(
      s.lazy(() => pricingInputDiscriminatorMappingUsageGraduatedBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingUsageGraduatedBillingTypeSchema,
      PricingInputDiscriminatorMappingUsageGraduatedBillingType.Arrears,
    ),
    pricePoints: s.array(s.lazy(() => tieredPricePointSchema)),
  },
  { additionalProperties: s.json() },
);
