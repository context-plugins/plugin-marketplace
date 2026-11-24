import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowExecutionFailedEventAttributes = {
  /** The descriptive reason provided for the failure. */
  reason?: string;
  /** The details of the failure. */
  details?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the FailWorkflowExecution decision to fail this execution. This information can be useful for
   * diagnosing problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionFailedEventAttributesSchema: Schema<WorkflowExecutionFailedEventAttributes> =
  s.object<WorkflowExecutionFailedEventAttributes>(
    {
      reason: s.optional(s.string()),
      details: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
