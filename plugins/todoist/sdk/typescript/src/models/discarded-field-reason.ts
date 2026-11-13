import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Which plan excluded the field, and so which one has to change to keep it: `workspace_plan_limit`
 * the workspace the target project belongs to, `personal_plan_limit` the importing user's own
 * subscription.
 */
export const DiscardedFieldReason = {
  PersonalPlanLimit: "personal_plan_limit",
  WorkspacePlanLimit: "workspace_plan_limit",
} as const;
export type DiscardedFieldReason =
  | (typeof DiscardedFieldReason)[keyof typeof DiscardedFieldReason]
  | (string & {});

export const discardedFieldReasonSchema: EnumSchema<DiscardedFieldReason> =
  s.enumOf<DiscardedFieldReason>(DiscardedFieldReason);
