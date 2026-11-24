import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditBenefitOutputSchema, type CreditBenefitOutput } from "./credit-benefit-output.js";
import { pricingOutputSchema, type PricingOutput } from "./pricing-output.js";

export type PricingResponse = {
  productAttributeId: string;
  name: string;
  pricing: PricingOutput;
  creditBenefits: CreditBenefitOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingResponseSchema: Schema<PricingResponse> = s.object<PricingResponse>(
  {
    productAttributeId: s.string(),
    name: s.string(),
    pricing: pricingOutputSchema,
    creditBenefits: s.array(s.lazy(() => creditBenefitOutputSchema)),
  },
  { additionalProperties: s.json() },
);
