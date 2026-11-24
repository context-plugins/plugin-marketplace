import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = {
  /** The workflowId of the external workflow execution to be canceled. */
  workflowId: string;
  /** The runId of the external workflow execution to be canceled. */
  runId?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the RequestCancelExternalWorkflowExecution decision for this cancellation request. This
   * information can be useful for diagnosing problems by tracing back the chain of events leading
   * up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Data attached to the event that can be used by the decider in subsequent workflow tasks. */
  control?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestCancelExternalWorkflowExecutionInitiatedEventAttributesSchema: Schema<RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> =
  s.object<RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(
    {
      workflowId: s.string(),
      runId: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
      control: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
