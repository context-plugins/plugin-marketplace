import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowExecutionOpenCounts = {
  /** The count of activity tasks whose status is OPEN. */
  openActivityTasks: number;
  /**
   * The count of decision tasks whose status is OPEN. A workflow execution can have at most one
   * open decision task.
   */
  openDecisionTasks: number;
  /** The count of timers started by this workflow execution that have not fired yet. */
  openTimers: number;
  /** The count of child workflow executions whose status is OPEN. */
  openChildWorkflowExecutions: number;
  /** The count of Lambda tasks whose status is OPEN. */
  openLambdaFunctions?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionOpenCountsSchema: Schema<WorkflowExecutionOpenCounts> =
  s.object<WorkflowExecutionOpenCounts>(
    {
      openActivityTasks: s.int(),
      openDecisionTasks: s.int(),
      openTimers: s.int(),
      openChildWorkflowExecutions: s.int(),
      openLambdaFunctions: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
