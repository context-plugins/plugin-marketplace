import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencySchema,
  type PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency,
} from "./pricing-input-discriminator-mapping-usage-prepaid-credits-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType,
  pricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-usage-prepaid-credits-billing-type.js";
import {
  pricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeSchema,
  type PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType,
} from "./pricing-input-discriminator-mapping-usage-prepaid-credits-signal-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** UsagePrepaidCredits variant */
export type PricingInput7 = {
  /** Discriminator value: UsagePrepaidCredits @default "UsagePrepaidCredits" */
  pricingType?: "UsagePrepaidCredits";
  eventName: string;
  signalType?: PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType;
  creditsCurrencyId: string;
  creditCost: number;
  unitValue?: number;
  billingFrequency?: PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType.Arrears */
  billingType?: PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType;
  pricePoints?: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput7Schema: Schema<PricingInput7> = s.object<PricingInput7>(
  {
    pricingType: s.defaulted(s.literal("UsagePrepaidCredits"), "UsagePrepaidCredits"),
    eventName: s.string(),
    signalType: s.optional(s.lazy(() => pricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeSchema)),
    creditsCurrencyId: s.string(),
    creditCost: s.float64(),
    unitValue: s.optional(s.float64()),
    billingFrequency: s.optional(
      s.lazy(() => pricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeSchema,
      PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType.Arrears,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => simplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
