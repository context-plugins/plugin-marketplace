import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type ChildWorkflowExecutionTimedOutEventAttributes = {
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  /**
   * The type of the timeout that caused the child workflow execution to time out.
   *
   * @default "START_TO_CLOSE"
   */
  timeoutType?: "START_TO_CLOSE";
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

export const childWorkflowExecutionTimedOutEventAttributesSchema: Schema<ChildWorkflowExecutionTimedOutEventAttributes> =
  s.object<ChildWorkflowExecutionTimedOutEventAttributes>(
    {
      workflowExecution: workflowExecutionSchema,
      workflowType: workflowTypeSchema,
      timeoutType: s.defaulted(s.literal("START_TO_CLOSE"), "START_TO_CLOSE"),
      initiatedEventId: s.int(),
      startedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
