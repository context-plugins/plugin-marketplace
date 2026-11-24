import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicy1Schema, type ChildPolicy1 } from "./child-policy1.js";
import { taskListSchema, type TaskList } from "./task-list.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type StartChildWorkflowExecutionDecisionAttributes = {
  workflowType: WorkflowType;
  /**
   * The workflowId of the workflow execution. The specified string must not contain a : (colon), /
   * (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it
   * must not be the literal string arn.
   */
  workflowId: string;
  /**
   * The data attached to the event that can be used by the decider in subsequent workflow tasks.
   * This data isn't sent to the child workflow execution.
   */
  control?: string;
  /** The input to be provided to the workflow execution. */
  input?: string;
  /**
   * The total duration for this workflow execution. This overrides the
   * defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration
   * is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
   * unlimited duration. An execution start-to-close timeout for this workflow execution must be
   * specified either as a default for the workflow type or through this parameter. If neither this
   * parameter is set nor a default execution start-to-close timeout was specified at registration
   * time then a fault is returned.
   */
  executionStartToCloseTimeout?: string;
  taskList?: TaskList;
  /**
   * A task priority that, if set, specifies the priority for a decision task of this workflow
   * execution. This overrides the defaultTaskPriority specified when registering the workflow type.
   * Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to
   * Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information
   * about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
   */
  taskPriority?: string;
  /**
   * Specifies the maximum duration of decision tasks for this workflow execution. This parameter
   * overrides the defaultTaskStartToCloseTimout specified when registering the workflow type using
   * RegisterWorkflowType. The duration is specified in seconds, an integer greater than or equal to
   * 0. You can use NONE to specify unlimited duration. A task start-to-close timeout for this
   * workflow execution must be specified either as a default for the workflow type or through this
   * parameter. If neither this parameter is set nor a default task start-to-close timeout was
   * specified at registration time then a fau
   */
  taskStartToCloseTimeout?: string;
  /**
   * If set, specifies the policy to use for the child workflow executions if the workflow execution
   * being started is terminated by calling the TerminateWorkflowExecution action explicitly or due
   * to an expired timeout. This policy overrides the default child policy specified when
   * registering the workflow type using RegisterWorkflowType. The supported child policies are:
   * TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is
   * attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its
   * history. It is up to the decider to take approp
   */
  childPolicy?: ChildPolicy1;
  /**
   * The list of tags to associate with the child workflow execution. A maximum of 5 tags can be
   * specified. You can list workflow executions with a specific tag by calling
   * ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
   */
  tagList?: string[];
  /** The IAM role attached to the child workflow execution. */
  lambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startChildWorkflowExecutionDecisionAttributesSchema: Schema<StartChildWorkflowExecutionDecisionAttributes> =
  s.object<StartChildWorkflowExecutionDecisionAttributes>(
    {
      workflowType: workflowTypeSchema,
      workflowId: s.string(),
      control: s.optional(s.string()),
      input: s.optional(s.string()),
      executionStartToCloseTimeout: s.optional(s.string()),
      taskList: s.optional(s.lazy(() => taskListSchema)),
      taskPriority: s.optional(s.string()),
      taskStartToCloseTimeout: s.optional(s.string()),
      childPolicy: s.optional(s.lazy(() => childPolicy1Schema)),
      tagList: s.optional(s.array(s.string())),
      lambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
