import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Outlines why a user is premium, possible values are: not_premium, current_personal_plan,
 * legacy_personal_plan or teams_business_member
 */
export const PremiumStatus = {
  NotPremium: "not_premium",
  CurrentPersonalPlan: "current_personal_plan",
  LegacyPersonalPlan: "legacy_personal_plan",
  TeamsBusinessMember: "teams_business_member",
} as const;
export type PremiumStatus = (typeof PremiumStatus)[keyof typeof PremiumStatus] | (string & {});

export const premiumStatusSchema: EnumSchema<PremiumStatus> = s.enumOf<PremiumStatus>(PremiumStatus);
