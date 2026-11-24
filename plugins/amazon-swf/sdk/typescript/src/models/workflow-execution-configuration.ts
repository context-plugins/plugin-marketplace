import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicy2Schema, type ChildPolicy2 } from "./child-policy2.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type WorkflowExecutionConfiguration = {
  /**
   * The maximum duration allowed for decision tasks for this workflow execution. The duration is
   * specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
   * unlimited duration.
   */
  taskStartToCloseTimeout: string;
  /**
   * The total duration for this workflow execution. The duration is specified in seconds, an
   * integer greater than or equal to 0. You can use NONE to specify unlimited duration.
   */
  executionStartToCloseTimeout: string;
  taskList: TaskList;
  /**
   * The priority assigned to decision tasks for this workflow execution. Valid values are integers
   * that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647).
   * Higher numbers indicate higher priority. For more information about setting task priority, see
   * Setting Task Priority in the Amazon SWF Developer Guide.
   */
  taskPriority?: string;
  /**
   * The policy to use for the child workflow executions if this workflow execution is terminated,
   * by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The
   * supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL –
   * A request to cancel is attempted for each child execution by recording a
   * WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
   * appropriate actions when it receives an execution history with this event. ABANDON – No action
   * is taken. The child executions continue to run.
   */
  childPolicy: ChildPolicy2;
  /** The IAM role attached to the child workflow execution. */
  lambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionConfigurationSchema: Schema<WorkflowExecutionConfiguration> =
  s.object<WorkflowExecutionConfiguration>(
    {
      taskStartToCloseTimeout: s.string(),
      executionStartToCloseTimeout: s.string(),
      taskList: taskListSchema,
      taskPriority: s.optional(s.string()),
      childPolicy: childPolicy2Schema,
      lambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
