import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If set, specifies the default policy to use for the child workflow executions when a workflow
 * execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly
 * or due to an expired timeout. This default can be overridden when starting a workflow execution
 * using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The
 * supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A
 * request to cancel is attempted for each child execution by recording a
 * WorkflowExecutionCancelRequested event in its history.
 */
export const DefaultChildPolicy = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type DefaultChildPolicy = (typeof DefaultChildPolicy)[keyof typeof DefaultChildPolicy] | (string & {});

export const defaultChildPolicySchema: EnumSchema<DefaultChildPolicy> =
  s.enumOf<DefaultChildPolicy>(DefaultChildPolicy);
