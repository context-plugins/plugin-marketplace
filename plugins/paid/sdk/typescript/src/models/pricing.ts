import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentPricePointSchema, type AgentPricePoint } from "./agent-price-point.js";
import { billingFrequencySchema, type BillingFrequency } from "./billing-frequency.js";
import { chargeTypeSchema, type ChargeType } from "./charge-type.js";
import { pricingModelTypeSchema, type PricingModelType } from "./pricing-model-type.js";

export type Pricing = {
  eventName?: string;
  taxable: boolean;
  creditCost?: number;
  chargeType: ChargeType;
  pricingModel: PricingModelType;
  billingFrequency: BillingFrequency;
  pricePoints: Record<string, AgentPricePoint>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingSchema: Schema<Pricing> = s.object<Pricing>(
  {
    eventName: s.optional(s.string()),
    taxable: s.boolean(),
    creditCost: s.optional(s.float64()),
    chargeType: chargeTypeSchema,
    pricingModel: pricingModelTypeSchema,
    billingFrequency: billingFrequencySchema,
    pricePoints: s.record(
      s.string(),
      s.lazy(() => agentPricePointSchema),
    ),
  },
  { additionalProperties: s.json() },
);
