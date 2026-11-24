import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingOutputPricingType = {
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
export type PricingOutputPricingType =
  | (typeof PricingOutputPricingType)[keyof typeof PricingOutputPricingType]
  | (string & {});

export const pricingOutputPricingTypeSchema: EnumSchema<PricingOutputPricingType> =
  s.enumOf<PricingOutputPricingType>(PricingOutputPricingType);
