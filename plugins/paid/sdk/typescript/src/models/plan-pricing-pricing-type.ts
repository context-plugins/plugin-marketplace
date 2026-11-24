import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanPricingPricingType = {
  RecurringPerUnit: "RecurringPerUnit",
  RecurringGraduated: "RecurringGraduated",
  RecurringVolume: "RecurringVolume",
  RecurringPercentOfTotal: "RecurringPercentOfTotal",
  UsagePerUnit: "UsagePerUnit",
  UsageGraduated: "UsageGraduated",
  UsageVolume: "UsageVolume",
  UsagePrepaidCredits: "UsagePrepaidCredits",
  UsageBracketedPrepaidCredits: "UsageBracketedPrepaidCredits",
  UsageCostPlus: "UsageCostPlus",
  OneTimePerUnit: "OneTimePerUnit",
  SeatBasedPerUnit: "SeatBasedPerUnit",
  SeatBasedGraduated: "SeatBasedGraduated",
  SeatBasedVolume: "SeatBasedVolume",
  SeatBasedPrepaidCredits: "SeatBasedPrepaidCredits",
} as const;
export type PlanPricingPricingType =
  | (typeof PlanPricingPricingType)[keyof typeof PlanPricingPricingType]
  | (string & {});

export const planPricingPricingTypeSchema: EnumSchema<PlanPricingPricingType> =
  s.enumOf<PlanPricingPricingType>(PlanPricingPricingType);
