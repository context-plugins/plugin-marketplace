import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignalWorkflowExecutionInput = {
  /** The name of the domain containing the workflow execution to signal. */
  domain: string;
  /** The workflowId of the workflow execution to signal. */
  workflowId: string;
  /** The runId of the workflow execution to signal. */
  runId?: string;
  /** The name of the signal. This name must be meaningful to the target workflow. */
  signalName: string;
  /**
   * Data to attach to the WorkflowExecutionSignaled event in the target workflow execution's
   * history.
   */
  input?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalWorkflowExecutionInputSchema: Schema<SignalWorkflowExecutionInput> =
  s.object<SignalWorkflowExecutionInput>(
    {
      domain: s.string(),
      workflowId: s.string(),
      runId: s.optional(s.string()),
      signalName: s.string(),
      input: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
