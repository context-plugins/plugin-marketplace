import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicySchema, type ChildPolicy } from "./child-policy.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type ContinueAsNewWorkflowExecutionDecisionAttributes = {
  /** The input provided to the new workflow execution. */
  input?: string;
  /**
   * If set, specifies the total duration for this workflow execution. This overrides the
   * defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration
   * is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
   * unlimited duration. An execution start-to-close timeout for this workflow execution must be
   * specified either as a default for the workflow type or through this field. If neither this
   * field is set nor a default execution start-to-close timeout was specified at registration time
   * then a fault is returned.
   */
  executionStartToCloseTimeout?: string;
  taskList?: TaskList;
  /**
   * The task priority that, if set, specifies the priority for the decision tasks for this workflow
   * execution. This overrides the defaultTaskPriority specified when registering the workflow type.
   * Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to
   * Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information
   * about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
   */
  taskPriority?: string;
  /**
   * Specifies the maximum duration of decision tasks for the new workflow execution. This parameter
   * overrides the defaultTaskStartToCloseTimout specified when registering the workflow type using
   * RegisterWorkflowType. The duration is specified in seconds, an integer greater than or equal to
   * 0. You can use NONE to specify unlimited duration. A task start-to-close timeout for the new
   * workflow execution must be specified either as a default for the workflow type or through this
   * parameter. If neither this parameter is set nor a default task start-to-close timeout was
   * specified at registration time then
   */
  taskStartToCloseTimeout?: string;
  /**
   * If set, specifies the policy to use for the child workflow executions of the new execution if
   * it is terminated by calling the TerminateWorkflowExecution action explicitly or due to an
   * expired timeout. This policy overrides the default child policy specified when registering the
   * workflow type using RegisterWorkflowType. The supported child policies are: TERMINATE – The
   * child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each
   * child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up
   * to the decider to take appropriate actions
   */
  childPolicy?: ChildPolicy;
  /**
   * The list of tags to associate with the new workflow execution. A maximum of 5 tags can be
   * specified. You can list workflow executions with a specific tag by calling
   * ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
   */
  tagList?: string[];
  /** The version of the workflow to start. */
  workflowTypeVersion?: string;
  /** The IAM role to attach to the new (continued) execution. */
  lambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const continueAsNewWorkflowExecutionDecisionAttributesSchema: Schema<ContinueAsNewWorkflowExecutionDecisionAttributes> =
  s.object<ContinueAsNewWorkflowExecutionDecisionAttributes>(
    {
      input: s.optional(s.string()),
      executionStartToCloseTimeout: s.optional(s.string()),
      taskList: s.optional(s.lazy(() => taskListSchema)),
      taskPriority: s.optional(s.string()),
      taskStartToCloseTimeout: s.optional(s.string()),
      childPolicy: s.optional(s.lazy(() => childPolicySchema)),
      tagList: s.optional(s.array(s.string())),
      workflowTypeVersion: s.optional(s.string()),
      lambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
