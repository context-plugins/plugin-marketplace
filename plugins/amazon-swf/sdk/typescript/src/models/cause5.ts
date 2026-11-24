import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If set, indicates that the workflow execution was automatically terminated, and specifies the
 * cause. This happens if the parent workflow execution times out or is terminated and the child
 * policy is set to terminate child executions.
 */
export const Cause5 = {
  ChildPolicyApplied: "CHILD_POLICY_APPLIED",
  EventLimitExceeded: "EVENT_LIMIT_EXCEEDED",
  OperatorInitiated: "OPERATOR_INITIATED",
} as const;
export type Cause5 = (typeof Cause5)[keyof typeof Cause5] | (string & {});

export const cause5Schema: EnumSchema<Cause5> = s.enumOf<Cause5>(Cause5);
