import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The policy to use for the child workflow executions if this execution gets terminated by
 * explicitly calling the TerminateWorkflowExecution action or due to an expired timeout. The
 * supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A
 * request to cancel is attempted for each child execution by recording a
 * WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
 * appropriate actions when it receives an execution history with this event. ABANDON – No action is
 * taken. The child executions continue to run.
 */
export const ChildPolicy6 = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type ChildPolicy6 = (typeof ChildPolicy6)[keyof typeof ChildPolicy6] | (string & {});

export const childPolicy6Schema: EnumSchema<ChildPolicy6> = s.enumOf<ChildPolicy6>(ChildPolicy6);
