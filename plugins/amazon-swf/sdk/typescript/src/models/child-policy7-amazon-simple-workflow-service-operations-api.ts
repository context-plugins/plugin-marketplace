import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If set, specifies the policy to use for the child workflow executions of the workflow execution
 * being terminated. This policy overrides the child policy specified for the workflow execution at
 * registration time or when starting the execution. The supported child policies are: TERMINATE –
 * The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each
 * child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to
 * the decider to take appropriate actions when it receives an execution history with this event.
 * ABANDON – No action is
 */
export const ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi = {
  Terminate: "TERMINATE",
  RequestCancel: "REQUEST_CANCEL",
  Abandon: "ABANDON",
} as const;
export type ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi =
  | (typeof ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi)[keyof typeof ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi]
  | (string & {});

export const childPolicy7AmazonSimpleWorkflowServiceOperationsApiSchema: EnumSchema<ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi> =
  s.enumOf<ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi>(
    ChildPolicy7AmazonSimpleWorkflowServiceOperationsApi,
  );
