import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditBenefitInputSchema, type CreditBenefitInput } from "./credit-benefit-input.js";
import { pricingInput15Schema, type PricingInput15 } from "./unions/pricing-input15.js";

export type UpdatePricingRequest = {
  pricing: PricingInput15;
  creditBenefits?: CreditBenefitInput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updatePricingRequestSchema: Schema<UpdatePricingRequest> = s.object<UpdatePricingRequest>(
  {
    pricing: pricingInput15Schema,
    creditBenefits: s.optional(s.array(s.lazy(() => creditBenefitInputSchema))),
  },
  { additionalProperties: s.json() },
);
