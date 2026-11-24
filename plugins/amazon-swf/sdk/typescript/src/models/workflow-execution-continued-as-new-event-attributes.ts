import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicy4Schema, type ChildPolicy4 } from "./child-policy4.js";
import { taskListSchema, type TaskList } from "./task-list.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type WorkflowExecutionContinuedAsNewEventAttributes = {
  /** The input provided to the new workflow execution. */
  input?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the ContinueAsNewWorkflowExecution decision that started this execution. This information can
   * be useful for diagnosing problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** The runId of the new workflow execution. */
  newExecutionRunId: string;
  /**
   * The total duration allowed for the new workflow execution. The duration is specified in
   * seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
   */
  executionStartToCloseTimeout?: string;
  taskList: TaskList;
  /**
   * The priority of the task to use for the decisions of the new (continued) workflow execution.
   */
  taskPriority?: string;
  /**
   * The maximum duration of decision tasks for the new workflow execution. The duration is
   * specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
   * unlimited duration.
   */
  taskStartToCloseTimeout?: string;
  /**
   * The policy to use for the child workflow executions of the new execution if it is terminated by
   * calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The
   * supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL –
   * A request to cancel is attempted for each child execution by recording a
   * WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
   * appropriate actions when it receives an execution history with this event. ABANDON – No action
   * is taken. The child executions continue to run.
   */
  childPolicy: ChildPolicy4;
  /** The list of tags associated with the new workflow execution. */
  tagList?: string[];
  workflowType: WorkflowType;
  /** The IAM role to attach to the new (continued) workflow execution. */
  lambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionContinuedAsNewEventAttributesSchema: Schema<WorkflowExecutionContinuedAsNewEventAttributes> =
  s.object<WorkflowExecutionContinuedAsNewEventAttributes>(
    {
      input: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
      newExecutionRunId: s.string(),
      executionStartToCloseTimeout: s.optional(s.string()),
      taskList: taskListSchema,
      taskPriority: s.optional(s.string()),
      taskStartToCloseTimeout: s.optional(s.string()),
      childPolicy: childPolicy4Schema,
      tagList: s.optional(s.array(s.string())),
      workflowType: workflowTypeSchema,
      lambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
