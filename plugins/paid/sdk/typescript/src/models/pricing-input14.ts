import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencySchema,
  type PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency,
} from "./pricing-input-discriminator-mapping-seat-based-prepaid-credits-billing-frequency.js";
import {
  PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType,
  pricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeSchema,
} from "./pricing-input-discriminator-mapping-seat-based-prepaid-credits-billing-type.js";
import { simplePricePointSchema, type SimplePricePoint } from "./simple-price-point.js";

/** SeatBasedPrepaidCredits variant */
export type PricingInput14 = {
  /** Discriminator value: SeatBasedPrepaidCredits @default "SeatBasedPrepaidCredits" */
  pricingType?: "SeatBasedPrepaidCredits";
  creditsCurrencyId: string;
  creditCost: number;
  unitValue?: number;
  billingFrequency: PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency;
  billingFrequencyCustomMonths?: number;
  /** @default PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType.Advance */
  billingType?: PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType;
  pricePoints?: SimplePricePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInput14Schema: Schema<PricingInput14> = s.object<PricingInput14>(
  {
    pricingType: s.defaulted(s.literal("SeatBasedPrepaidCredits"), "SeatBasedPrepaidCredits"),
    creditsCurrencyId: s.string(),
    creditCost: s.float64(),
    unitValue: s.optional(s.float64()),
    billingFrequency: pricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.int()),
    billingType: s.defaulted(
      pricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeSchema,
      PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType.Advance,
    ),
    pricePoints: s.optional(s.array(s.lazy(() => simplePricePointSchema))),
  },
  { additionalProperties: s.json() },
);
