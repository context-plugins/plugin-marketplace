import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If set, specifies the policy to use for the child workflow executions if the workflow execution
 * being started is terminated by calling the TerminateWorkflowExecution action explicitly or due to
 * an expired timeout. This policy overrides the default child policy specified when registering the
 * workflow type using RegisterWorkflowType. The supported child policies are: TERMINATE – The child
 * executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
 * execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the
 * decider to take approp
 */
export const ChildPolicy1 = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type ChildPolicy1 = (typeof ChildPolicy1)[keyof typeof ChildPolicy1] | (string & {});

export const childPolicy1Schema: EnumSchema<ChildPolicy1> = s.enumOf<ChildPolicy1>(ChildPolicy1);
