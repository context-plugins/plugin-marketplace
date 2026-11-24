import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planCreditBenefitSchema, type PlanCreditBenefit } from "./plan-credit-benefit.js";
import { planPricing1Schema, type PlanPricing1 } from "./plan-pricing1.js";

export type PlanAttribute = {
  productAttributeId: string;
  name: string;
  active: boolean;
  /** Pricing configuration for a plan attribute. Money amounts are expressed in cents. */
  pricing: PlanPricing1;
  creditBenefits: PlanCreditBenefit[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planAttributeSchema: Schema<PlanAttribute> = s.object<PlanAttribute>(
  {
    productAttributeId: s.string(),
    name: s.string(),
    active: s.boolean(),
    pricing: planPricing1Schema,
    creditBenefits: s.array(s.lazy(() => planCreditBenefitSchema)),
  },
  { additionalProperties: s.json() },
);
