import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencySchema,
  type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency,
} from "./pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType,
  pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-billing-type.js";
import {
  pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsSchema,
  type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems,
} from "./pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-credit-unit-brackets-items.js";
import {
  pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputSchema,
  type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput,
} from "./pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-pricing-input.js";
import {
  pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeSchema,
  type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType,
} from "./pricing-input-discriminator-mapping-usage-bracketed-prepaid-credits-signal-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** UsageBracketedPrepaidCredits variant */
export type PricingInput8 = {
  /** Discriminator value: UsageBracketedPrepaidCredits @default "UsageBracketedPrepaidCredits" */
  pricingType?: "UsageBracketedPrepaidCredits";
  eventName: string;
  signalType?: PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType;
  creditsCurrencyId?: string;
  unitValue?: number;
  overageUnitPrice?: number;
  creditRolloverAmount?: number;
  pricingInput: PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput;
  creditUnitBrackets: PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems[];
  billingFrequency?: PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType.Arrears */
  billingType?: PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType;
  pricePoints?: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput8Schema: Schema<PricingInput8> = s.object<PricingInput8>(
  {
    pricingType: s.defaulted(s.literal("UsageBracketedPrepaidCredits"), "UsageBracketedPrepaidCredits"),
    eventName: s.string(),
    signalType: s.optional(
      s.lazy(() => pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeSchema),
    ),
    creditsCurrencyId: s.optional(s.string()),
    unitValue: s.optional(s.float64()),
    overageUnitPrice: s.optional(s.float64()),
    creditRolloverAmount: s.optional(s.float64()),
    pricingInput: pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputSchema,
    creditUnitBrackets: s.array(
      s.lazy(() => pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsSchema),
    ),
    billingFrequency: s.optional(
      s.lazy(() => pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencySchema),
    ),
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeSchema,
      PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType.Arrears,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => simplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
