import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicy8Schema, type ChildPolicy8 } from "./child-policy8.js";

export type TerminateWorkflowExecutionInput = {
  /** The domain of the workflow execution to terminate. */
  domain: string;
  /** The workflowId of the workflow execution to terminate. */
  workflowId: string;
  /** The runId of the workflow execution to terminate. */
  runId?: string;
  /** A descriptive reason for terminating the workflow execution. */
  reason?: string;
  /** Details for terminating the workflow execution. */
  details?: string;
  /**
   * If set, specifies the policy to use for the child workflow executions of the workflow execution
   * being terminated. This policy overrides the child policy specified for the workflow execution
   * at registration time or when starting the execution. The supported child policies are:
   * TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is
   * attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its
   * history. It is up to the decider to take appropriate actions when it receives an execution
   * history with this event. ABANDON – No action is
   */
  childPolicy?: ChildPolicy8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const terminateWorkflowExecutionInputSchema: Schema<TerminateWorkflowExecutionInput> =
  s.object<TerminateWorkflowExecutionInput>(
    {
      domain: s.string(),
      workflowId: s.string(),
      runId: s.optional(s.string()),
      reason: s.optional(s.string()),
      details: s.optional(s.string()),
      childPolicy: s.optional(s.lazy(() => childPolicy8Schema)),
    },
    { additionalProperties: s.json() },
  );
