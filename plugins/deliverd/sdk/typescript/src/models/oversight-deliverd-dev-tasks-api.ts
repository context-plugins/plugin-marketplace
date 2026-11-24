import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How people oversee the AI's work */
export const OversightDeliverdDevTasksApi = {
  None: "none",
  PostActionReview: "post_action_review",
  SampledReview: "sampled_review",
  HumanOnTheLoop: "human_on_the_loop",
  HumanInTheLoop: "human_in_the_loop",
  PreActionApproval: "pre_action_approval",
  DualApproval: "dual_approval",
} as const;
export type OversightDeliverdDevTasksApi =
  | (typeof OversightDeliverdDevTasksApi)[keyof typeof OversightDeliverdDevTasksApi]
  | (string & {});

export const oversightDeliverdDevTasksApiSchema: EnumSchema<OversightDeliverdDevTasksApi> =
  s.enumOf<OversightDeliverdDevTasksApi>(OversightDeliverdDevTasksApi);
