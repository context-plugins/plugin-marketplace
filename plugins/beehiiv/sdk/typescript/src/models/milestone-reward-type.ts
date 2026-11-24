import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What type of reward this is.<br>`physical` - A product which must be sent to the
 * subscriber.<br>`promo_code` - A code that is redeemable for goods or services.
 */
export const MilestoneRewardType = {
  Physical: "physical",
  PromoCode: "promo_code",
  Digital: "digital",
  PremiumGift: "premium_gift",
} as const;
export type MilestoneRewardType =
  | (typeof MilestoneRewardType)[keyof typeof MilestoneRewardType]
  | (string & {});

export const milestoneRewardTypeSchema: EnumSchema<MilestoneRewardType> =
  s.enumOf<MilestoneRewardType>(MilestoneRewardType);
