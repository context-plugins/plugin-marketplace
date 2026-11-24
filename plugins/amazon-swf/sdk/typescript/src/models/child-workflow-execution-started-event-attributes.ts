import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type ChildWorkflowExecutionStartedEventAttributes = {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  /**
   * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the
   * StartChildWorkflowExecution Decision to start this child workflow execution. This information
   * can be useful for diagnosing problems by tracing back the chain of events leading up to this
   * event.
   */
  initiatedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const childWorkflowExecutionStartedEventAttributesSchema: Schema<ChildWorkflowExecutionStartedEventAttributes> =
  s.object<ChildWorkflowExecutionStartedEventAttributes>(
    {
      workflowExecution: workflowExecutionSchema,
      workflowType: workflowTypeSchema,
      initiatedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
