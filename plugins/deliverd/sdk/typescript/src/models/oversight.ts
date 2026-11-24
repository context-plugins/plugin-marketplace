import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Oversight = {
  None: "none",
  PostActionReview: "post_action_review",
  SampledReview: "sampled_review",
  HumanOnTheLoop: "human_on_the_loop",
  HumanInTheLoop: "human_in_the_loop",
  PreActionApproval: "pre_action_approval",
  DualApproval: "dual_approval",
} as const;
export type Oversight = (typeof Oversight)[keyof typeof Oversight] | (string & {});

export const oversightSchema: EnumSchema<Oversight> = s.enumOf<Oversight>(Oversight);
