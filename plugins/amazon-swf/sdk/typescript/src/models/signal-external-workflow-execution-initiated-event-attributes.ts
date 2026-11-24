import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignalExternalWorkflowExecutionInitiatedEventAttributes = {
  /** The workflowId of the external workflow execution. */
  workflowId: string;
  /** The runId of the external workflow execution to send the signal to. */
  runId?: string;
  /** The name of the signal. */
  signalName: string;
  /** The input provided to the signal. */
  input?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the SignalExternalWorkflowExecution decision for this signal. This information can be useful
   * for diagnosing problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Data attached to the event that can be used by the decider in subsequent decision tasks. */
  control?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalExternalWorkflowExecutionInitiatedEventAttributesSchema: Schema<SignalExternalWorkflowExecutionInitiatedEventAttributes> =
  s.object<SignalExternalWorkflowExecutionInitiatedEventAttributes>(
    {
      workflowId: s.string(),
      runId: s.optional(s.string()),
      signalName: s.string(),
      input: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
      control: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
