import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If set, specifies the policy to use for the child workflow executions of this workflow execution
 * if it is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an
 * expired timeout. This policy overrides the default child policy specified when registering the
 * workflow type using RegisterWorkflowType. The supported child policies are: TERMINATE – The child
 * executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
 * execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the
 * decider to take appropriate
 */
export const ChildPolicy7 = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type ChildPolicy7 = (typeof ChildPolicy7)[keyof typeof ChildPolicy7] | (string & {});

export const childPolicy7Schema: EnumSchema<ChildPolicy7> = s.enumOf<ChildPolicy7>(ChildPolicy7);
