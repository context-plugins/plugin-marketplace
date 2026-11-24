import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanCreditBenefitRolloverDurationUnit = {
  Days: "days",
  Months: "months",
} as const;
export type PlanCreditBenefitRolloverDurationUnit =
  | (typeof PlanCreditBenefitRolloverDurationUnit)[keyof typeof PlanCreditBenefitRolloverDurationUnit]
  | (string & {});

export const planCreditBenefitRolloverDurationUnitSchema: EnumSchema<PlanCreditBenefitRolloverDurationUnit> =
  s.enumOf<PlanCreditBenefitRolloverDurationUnit>(PlanCreditBenefitRolloverDurationUnit);
