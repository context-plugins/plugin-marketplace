import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A follow-up action that can be invoked by the user after a response. The action parameters are
 * not included and need to be predicted/filled separately.
 */
export type FollowupAction = {
  /** Unique identifier for this actionRun recommendation event. */
  actionRunId?: string;
  /** The ID of the action instance that will be invoked. */
  actionInstanceId?: string;
  /** The ID of the associated action. */
  actionId?: string;
  /** Map of assistant predicted parameters and their corresponding values. */
  parameters?: Record<string, string>;
  /** Text to be displayed to the user when recommending the action instance. */
  recommendationText?: string;
  /** The label to be used when displaying a button to execute this action instance. */
  actionLabel?: string;
  /** Whether user confirmation is needed before executing this action instance. */
  userConfirmationRequired?: boolean;
};

export const followupActionSchema: Schema<FollowupAction> = s.object<FollowupAction>({
  actionRunId: s.optional(s.string()),
  actionInstanceId: s.optional(s.string()),
  actionId: s.optional(s.string()),
  parameters: s.optional(s.record(s.string(), s.string())),
  recommendationText: s.optional(s.string()),
  actionLabel: s.optional(s.string()),
  userConfirmationRequired: s.optional(s.boolean()),
});
