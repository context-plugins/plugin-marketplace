import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingUsagePerUnitBillingFrequencySchema,
  type PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency,
} from "./pricing-input-discriminator-mapping-usage-per-unit-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingUsagePerUnitBillingType,
  pricingInputDiscriminatorMappingUsagePerUnitBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-usage-per-unit-billing-type.js";
import {
  pricingInputDiscriminatorMappingUsagePerUnitSignalTypeSchema,
  type PricingInputDiscriminatorMappingUsagePerUnitSignalType,
} from "./pricing-input-discriminator-mapping-usage-per-unit-signal-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** UsagePerUnit variant */
export type PricingInput4 = {
  /** Discriminator value: UsagePerUnit @default "UsagePerUnit" */
  pricingType?: "UsagePerUnit";
  eventName: string;
  signalType?: PricingInputDiscriminatorMappingUsagePerUnitSignalType;
  billingFrequency?: PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingUsagePerUnitBillingType.Arrears */
  billingType?: PricingInputDiscriminatorMappingUsagePerUnitBillingType;
  pricePoints: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput4Schema: Schema<PricingInput4> = s.object<PricingInput4>(
  {
    pricingType: s.defaulted(s.literal("UsagePerUnit"), "UsagePerUnit"),
    eventName: s.string(),
    signalType: s.optional(s.lazy(() => pricingInputDiscriminatorMappingUsagePerUnitSignalTypeSchema)),
    billingFrequency: s.optional(
      s.lazy(() => pricingInputDiscriminatorMappingUsagePerUnitBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingUsagePerUnitBillingTypeSchema,
      PricingInputDiscriminatorMappingUsagePerUnitBillingType.Arrears,
    ),
    pricePoints: s.array(s.lazy(() => simplePricePointSchema)),
  },
  { additionalProperties: s.json() },
);
