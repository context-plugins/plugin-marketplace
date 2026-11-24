import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The default policy to use for the child workflow executions when a workflow execution of this
 * type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an
 * expired timeout. This default can be overridden when starting a workflow execution using the
 * StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The supported child
 * policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to
 * cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested
 * event in its history. It is up to the d
 */
export const DefaultChildPolicy1 = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type DefaultChildPolicy1 =
  | (typeof DefaultChildPolicy1)[keyof typeof DefaultChildPolicy1]
  | (string & {});

export const defaultChildPolicy1Schema: EnumSchema<DefaultChildPolicy1> =
  s.enumOf<DefaultChildPolicy1>(DefaultChildPolicy1);
