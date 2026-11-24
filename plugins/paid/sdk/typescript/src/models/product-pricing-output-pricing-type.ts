import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingOutputPricingType = {
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
export type ProductPricingOutputPricingType =
  | (typeof ProductPricingOutputPricingType)[keyof typeof ProductPricingOutputPricingType]
  | (string & {});

export const productPricingOutputPricingTypeSchema: EnumSchema<ProductPricingOutputPricingType> =
  s.enumOf<ProductPricingOutputPricingType>(ProductPricingOutputPricingType);
