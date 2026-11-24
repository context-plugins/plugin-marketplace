import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanCreditBenefitAllocationCadence = {
  Upfront: "upfront",
  Monthly: "monthly",
} as const;
export type PlanCreditBenefitAllocationCadence =
  | (typeof PlanCreditBenefitAllocationCadence)[keyof typeof PlanCreditBenefitAllocationCadence]
  | (string & {});

export const planCreditBenefitAllocationCadenceSchema: EnumSchema<PlanCreditBenefitAllocationCadence> =
  s.enumOf<PlanCreditBenefitAllocationCadence>(PlanCreditBenefitAllocationCadence);
