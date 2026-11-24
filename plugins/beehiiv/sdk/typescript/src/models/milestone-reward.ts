import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { milestoneRewardTypeSchema, type MilestoneRewardType } from "./milestone-reward-type.js";

/** The reward object. */
export type MilestoneReward = {
  /** A unique prefixed id of the reward. */
  id: string;
  /** The name given to the reward at creation. */
  name: string;
  /** The description given to the name at creation. */
  description: string;
  /** A URL of an image to be displayed with the reward. */
  imageUrl: string;
  /**
   * What type of reward this is.<br>`physical` - A product which must be sent to the
   * subscriber.<br>`promo_code` - A code that is redeemable for goods or services.
   */
  type: MilestoneRewardType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const milestoneRewardSchema: Schema<MilestoneReward> = s.object<MilestoneReward>(
  {
    id: s.string(),
    name: s.string(),
    description: s.string(),
    imageUrl: s.string(),
    type: milestoneRewardTypeSchema,
    _keysMap: {
      imageUrl: "image_url",
    },
  },
  { additionalProperties: s.json() },
);
