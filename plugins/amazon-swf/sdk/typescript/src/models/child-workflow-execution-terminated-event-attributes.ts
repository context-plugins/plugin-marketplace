import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type ChildWorkflowExecutionTerminatedEventAttributes = {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
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

export const childWorkflowExecutionTerminatedEventAttributesSchema: Schema<ChildWorkflowExecutionTerminatedEventAttributes> =
  s.object<ChildWorkflowExecutionTerminatedEventAttributes>(
    {
      workflowExecution: workflowExecutionSchema,
      workflowType: workflowTypeSchema,
      initiatedEventId: s.int(),
      startedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
