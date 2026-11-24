import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicy2Schema, type ChildPolicy2 } from "./child-policy2.js";
import { taskListSchema, type TaskList } from "./task-list.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type WorkflowExecutionStartedEventAttributes = {
  /** The input provided to the workflow execution. */
  input?: string;
  /**
   * The maximum duration for this workflow execution. The duration is specified in seconds, an
   * integer greater than or equal to 0. You can use NONE to specify unlimited duration.
   */
  executionStartToCloseTimeout?: string;
  /**
   * The maximum duration of decision tasks for this workflow type. The duration is specified in
   * seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
   */
  taskStartToCloseTimeout?: string;
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
  taskList: TaskList;
  /** The priority of the decision tasks in the workflow execution. */
  taskPriority?: string;
  workflowType: WorkflowType;
  /**
   * The list of tags associated with this workflow execution. An execution can have up to 5 tags.
   */
  tagList?: string[];
  /**
   * If this workflow execution was started due to a ContinueAsNewWorkflowExecution decision, then
   * it contains the runId of the previous workflow execution that was closed and continued as this
   * execution.
   */
  continuedExecutionRunId?: string;
  parentWorkflowExecution?: WorkflowExecution;
  /**
   * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the
   * StartChildWorkflowExecution Decision to start this workflow execution. The source event with
   * this ID can be found in the history of the source workflow execution. This information can be
   * useful for diagnosing problems by tracing back the chain of events leading up to this event.
   */
  parentInitiatedEventId?: number;
  /** The IAM role attached to the workflow execution. */
  lambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionStartedEventAttributesSchema: Schema<WorkflowExecutionStartedEventAttributes> =
  s.object<WorkflowExecutionStartedEventAttributes>(
    {
      input: s.optional(s.string()),
      executionStartToCloseTimeout: s.optional(s.string()),
      taskStartToCloseTimeout: s.optional(s.string()),
      childPolicy: childPolicy2Schema,
      taskList: taskListSchema,
      taskPriority: s.optional(s.string()),
      workflowType: workflowTypeSchema,
      tagList: s.optional(s.array(s.string())),
      continuedExecutionRunId: s.optional(s.string()),
      parentWorkflowExecution: s.optional(s.lazy(() => workflowExecutionSchema)),
      parentInitiatedEventId: s.optional(s.int()),
      lambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
