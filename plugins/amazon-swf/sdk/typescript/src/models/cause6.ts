import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If set, indicates that the request to cancel the workflow execution was automatically generated,
 * and specifies the cause. This happens if the parent workflow execution times out or is
 * terminated, and the child policy is set to cancel child executions.
 */
export const Cause6 = {
  ChildPolicyApplied: "CHILD_POLICY_APPLIED",
} as const;
export type Cause6 = (typeof Cause6)[keyof typeof Cause6] | (string & {});

export const cause6Schema: EnumSchema<Cause6> = s.enumOf<Cause6>(Cause6);
