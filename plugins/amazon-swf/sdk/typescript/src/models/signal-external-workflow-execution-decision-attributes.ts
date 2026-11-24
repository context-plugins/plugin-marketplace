import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignalExternalWorkflowExecutionDecisionAttributes = {
  /** The workflowId of the workflow execution to be signaled. */
  workflowId: string;
  /** The runId of the workflow execution to be signaled. */
  runId?: string;
  /**
   * The name of the signal.The target workflow execution uses the signal name and input to process
   * the signal.
   */
  signalName: string;
  /**
   * The input data to be provided with the signal. The target workflow execution uses the signal
   * name and input data to process the signal.
   */
  input?: string;
  /**
   * The data attached to the event that can be used by the decider in subsequent decision tasks.
   */
  control?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalExternalWorkflowExecutionDecisionAttributesSchema: Schema<SignalExternalWorkflowExecutionDecisionAttributes> =
  s.object<SignalExternalWorkflowExecutionDecisionAttributes>(
    {
      workflowId: s.string(),
      runId: s.optional(s.string()),
      signalName: s.string(),
      input: s.optional(s.string()),
      control: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
