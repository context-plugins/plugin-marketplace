import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The policy used for the child workflow executions of this workflow execution. The supported child
 * policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to
 * cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested
 * event in its history. It is up to the decider to take appropriate actions when it receives an
 * execution history with this event. ABANDON – No action is taken. The child executions continue to
 * run.
 */
export const ChildPolicy3 = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type ChildPolicy3 = (typeof ChildPolicy3)[keyof typeof ChildPolicy3] | (string & {});

export const childPolicy3Schema: EnumSchema<ChildPolicy3> = s.enumOf<ChildPolicy3>(ChildPolicy3);
