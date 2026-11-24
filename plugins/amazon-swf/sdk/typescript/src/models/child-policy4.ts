import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The policy to use for the child workflow executions of the new execution if it is terminated by
 * calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The
 * supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A
 * request to cancel is attempted for each child execution by recording a
 * WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
 * appropriate actions when it receives an execution history with this event. ABANDON – No action is
 * taken. The child executions continue to run.
 */
export const ChildPolicy4 = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type ChildPolicy4 = (typeof ChildPolicy4)[keyof typeof ChildPolicy4] | (string & {});

export const childPolicy4Schema: EnumSchema<ChildPolicy4> = s.enumOf<ChildPolicy4>(ChildPolicy4);
