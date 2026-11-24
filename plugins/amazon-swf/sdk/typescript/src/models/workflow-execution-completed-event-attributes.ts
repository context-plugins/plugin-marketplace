import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowExecutionCompletedEventAttributes = {
  /** The result produced by the workflow execution upon successful completion. */
  result?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the CompleteWorkflowExecution decision to complete this execution. This information can be
   * useful for diagnosing problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionCompletedEventAttributesSchema: Schema<WorkflowExecutionCompletedEventAttributes> =
  s.object<WorkflowExecutionCompletedEventAttributes>(
    {
      result: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
