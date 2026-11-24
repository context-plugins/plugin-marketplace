import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JobBenefit = {
  JobBenefitUnspecified: "JOB_BENEFIT_UNSPECIFIED",
  ChildCare: "CHILD_CARE",
  Dental: "DENTAL",
  DomesticPartner: "DOMESTIC_PARTNER",
  FlexibleHours: "FLEXIBLE_HOURS",
  Medical: "MEDICAL",
  LifeInsurance: "LIFE_INSURANCE",
  ParentalLeave: "PARENTAL_LEAVE",
  RetirementPlan: "RETIREMENT_PLAN",
  SickDays: "SICK_DAYS",
  Vacation: "VACATION",
  Vision: "VISION",
} as const;
export type JobBenefit = (typeof JobBenefit)[keyof typeof JobBenefit] | (string & {});

export const jobBenefitSchema: EnumSchema<JobBenefit> = s.enumOf<JobBenefit>(JobBenefit);
