import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The policy to use for the child workflow executions if this workflow execution is terminated, by
 * calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The
 * supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A
 * request to cancel is attempted for each child execution by recording a
 * WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
 * appropriate actions when it receives an execution history with this event. ABANDON – No action is
 * taken. The child executions continue to run.
 */
export const ChildPolicy2 = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type ChildPolicy2 = (typeof ChildPolicy2)[keyof typeof ChildPolicy2] | (string & {});

export const childPolicy2Schema: EnumSchema<ChildPolicy2> = s.enumOf<ChildPolicy2>(ChildPolicy2);
