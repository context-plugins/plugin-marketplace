import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowExecutionCanceledEventAttributes = {
  /** The details of the cancellation. */
  details?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the CancelWorkflowExecution decision for this cancellation request. This information can be
   * useful for diagnosing problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionCanceledEventAttributesSchema: Schema<WorkflowExecutionCanceledEventAttributes> =
  s.object<WorkflowExecutionCanceledEventAttributes>(
    {
      details: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
