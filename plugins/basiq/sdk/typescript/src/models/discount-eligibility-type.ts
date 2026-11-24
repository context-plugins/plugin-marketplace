import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the specific eligibility constraint for a discountType. */
export const DiscountEligibilityType = {
  Business: "BUSINESS",
  EmploymentStatus: "EMPLOYMENT_STATUS",
  Introductory: "INTRODUCTORY",
  MaxAge: "MAX_AGE",
  MinAge: "MIN_AGE",
  MinIncome: "MIN_INCOME",
  MinTurnover: "MIN_TURNOVER",
  NaturalPerson: "NATURAL_PERSON",
  Other: "OTHER",
  PensionRecipient: "PENSION_RECIPIENT",
  ResidencyStatus: "RESIDENCY_STATUS",
  Staff: "STAFF",
  Student: "STUDENT",
} as const;
export type DiscountEligibilityType =
  | (typeof DiscountEligibilityType)[keyof typeof DiscountEligibilityType]
  | (string & {});

export const discountEligibilityTypeSchema: EnumSchema<DiscountEligibilityType> =
  s.enumOf<DiscountEligibilityType>(DiscountEligibilityType);
