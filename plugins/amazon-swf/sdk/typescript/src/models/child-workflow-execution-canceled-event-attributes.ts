import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type ChildWorkflowExecutionCanceledEventAttributes = {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  /** Details of the cancellation (if provided). */
  details?: string;
  /**
   * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the
   * StartChildWorkflowExecution Decision to start this child workflow execution. This information
   * can be useful for diagnosing problems by tracing back the chain of events leading up to this
   * event.
   */
  initiatedEventId: number;
  /**
   * The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution
   * was started. This information can be useful for diagnosing problems by tracing back the chain
   * of events leading up to this event.
   */
  startedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const childWorkflowExecutionCanceledEventAttributesSchema: Schema<ChildWorkflowExecutionCanceledEventAttributes> =
  s.object<ChildWorkflowExecutionCanceledEventAttributes>(
    {
      workflowExecution: workflowExecutionSchema,
      workflowType: workflowTypeSchema,
      details: s.optional(s.string()),
      initiatedEventId: s.int(),
      startedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
