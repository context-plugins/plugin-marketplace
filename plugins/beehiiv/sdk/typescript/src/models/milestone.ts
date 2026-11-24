import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { milestoneRewardSchema, type MilestoneReward } from "./milestone-reward.js";

/** The milestone object. */
export type Milestone = {
  /** A unique prefixed id of the milestone. */
  id: string;
  /**
   * Only available with a promo code reward type. This indicates that an email will automatically
   * be sent when the milestone is reached containing the reward promo code.
   */
  autoFulfill: boolean;
  /** The number of referrals needed to reach this milestone. */
  numReferrals: number;
  /** The reward object. */
  reward: MilestoneReward;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const milestoneSchema: Schema<Milestone> = s.object<Milestone>(
  {
    id: s.string(),
    autoFulfill: s.boolean(),
    numReferrals: s.int(),
    reward: milestoneRewardSchema,
    _keysMap: {
      autoFulfill: "auto_fulfill",
      numReferrals: "num_referrals",
    },
  },
  { additionalProperties: s.json() },
);
