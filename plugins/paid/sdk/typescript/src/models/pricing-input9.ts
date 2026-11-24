import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingUsageCostPlusBillingFrequencySchema,
  type PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency,
} from "./pricing-input-discriminator-mapping-usage-cost-plus-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingUsageCostPlusBillingType,
  pricingInputDiscriminatorMappingUsageCostPlusBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-usage-cost-plus-billing-type.js";
import {
  pricingInputDiscriminatorMappingUsageCostPlusSignalTypeSchema,
  type PricingInputDiscriminatorMappingUsageCostPlusSignalType,
} from "./pricing-input-discriminator-mapping-usage-cost-plus-signal-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** UsageCostPlus variant */
export type PricingInput9 = {
  /** Discriminator value: UsageCostPlus @default "UsageCostPlus" */
  pricingType?: "UsageCostPlus";
  costPlusMultiplier: number;
  signalType?: PricingInputDiscriminatorMappingUsageCostPlusSignalType;
  billingFrequency?: PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingUsageCostPlusBillingType.Arrears */
  billingType?: PricingInputDiscriminatorMappingUsageCostPlusBillingType;
  pricePoints?: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput9Schema: Schema<PricingInput9> = s.object<PricingInput9>(
  {
    pricingType: s.defaulted(s.literal("UsageCostPlus"), "UsageCostPlus"),
    costPlusMultiplier: s.float64(),
    signalType: s.optional(s.lazy(() => pricingInputDiscriminatorMappingUsageCostPlusSignalTypeSchema)),
    billingFrequency: s.optional(
      s.lazy(() => pricingInputDiscriminatorMappingUsageCostPlusBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingUsageCostPlusBillingTypeSchema,
      PricingInputDiscriminatorMappingUsageCostPlusBillingType.Arrears,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => simplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
