import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicy6Schema, type ChildPolicy6 } from "./child-policy6.js";
import { taskListSchema, type TaskList } from "./task-list.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type StartChildWorkflowExecutionInitiatedEventAttributes = {
  /** The workflowId of the child workflow execution. */
  workflowId: string;
  workflowType: WorkflowType;
  /**
   * Data attached to the event that can be used by the decider in subsequent decision tasks. This
   * data isn't sent to the activity.
   */
  control?: string;
  /** The inputs provided to the child workflow execution. */
  input?: string;
  /**
   * The maximum duration for the child workflow execution. If the workflow execution isn't closed
   * within this duration, it is timed out and force-terminated. The duration is specified in
   * seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
   */
  executionStartToCloseTimeout?: string;
  taskList: TaskList;
  /**
   * The priority assigned for the decision tasks for this workflow execution. Valid values are
   * integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE
   * (2147483647). Higher numbers indicate higher priority. For more information about setting task
   * priority, see Setting Task Priority in the Amazon SWF Developer Guide.
   */
  taskPriority?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the StartChildWorkflowExecution Decision to request this child workflow execution. This
   * information can be useful for diagnosing problems by tracing back the cause of events.
   */
  decisionTaskCompletedEventId: number;
  /**
   * The policy to use for the child workflow executions if this execution gets terminated by
   * explicitly calling the TerminateWorkflowExecution action or due to an expired timeout. The
   * supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL –
   * A request to cancel is attempted for each child execution by recording a
   * WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
   * appropriate actions when it receives an execution history with this event. ABANDON – No action
   * is taken. The child executions continue to run.
   */
  childPolicy: ChildPolicy6;
  /**
   * The maximum duration allowed for the decision tasks for this workflow execution. The duration
   * is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
   * unlimited duration.
   */
  taskStartToCloseTimeout?: string;
  /** The list of tags to associated with the child workflow execution. */
  tagList?: string[];
  /** The IAM role to attach to the child workflow execution. */
  lambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startChildWorkflowExecutionInitiatedEventAttributesSchema: Schema<StartChildWorkflowExecutionInitiatedEventAttributes> =
  s.object<StartChildWorkflowExecutionInitiatedEventAttributes>(
    {
      workflowId: s.string(),
      workflowType: workflowTypeSchema,
      control: s.optional(s.string()),
      input: s.optional(s.string()),
      executionStartToCloseTimeout: s.optional(s.string()),
      taskList: taskListSchema,
      taskPriority: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
      childPolicy: childPolicy6Schema,
      taskStartToCloseTimeout: s.optional(s.string()),
      tagList: s.optional(s.array(s.string())),
      lambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
