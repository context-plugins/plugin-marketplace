import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicy7Schema, type ChildPolicy7 } from "./child-policy7.js";
import { taskListSchema, type TaskList } from "./task-list.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type StartWorkflowExecutionInput = {
  /**
   * The name of the domain in which the workflow execution is created. The specified string must
   * not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f
   * | \u007f-\u009f). Also, it must not be the literal string arn.
   */
  domain: string;
  /**
   * The user defined identifier associated with the workflow execution. You can use this to
   * associate a custom identifier with the workflow execution. You may specify the same identifier
   * if a workflow execution is logically a restart of a previous execution. You cannot have two
   * open workflow executions with the same workflowId at the same time within the same domain. The
   * specified string must not contain a : (colon), / (slash), | (vertical bar), or any control
   * characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn.
   */
  workflowId: string;
  workflowType: WorkflowType;
  taskList?: TaskList;
  /**
   * The task priority to use for this workflow execution. This overrides any default priority that
   * was assigned when the workflow type was registered. If not set, then the default task priority
   * for the workflow type is used. Valid values are integers that range from Java's
   * Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate
   * higher priority. For more information about setting task priority, see Setting Task Priority in
   * the Amazon SWF Developer Guide.
   */
  taskPriority?: string;
  /**
   * The input for the workflow execution. This is a free form string which should be meaningful to
   * the workflow you are starting. This input is made available to the new workflow execution in
   * the WorkflowExecutionStarted history event.
   */
  input?: string;
  /**
   * The total duration for this workflow execution. This overrides the
   * defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration
   * is specified in seconds; an integer greater than or equal to 0. Exceeding this limit causes the
   * workflow execution to time out. Unlike some of the other timeout parameters in Amazon SWF, you
   * cannot specify a value of "NONE" for this timeout; there is a one-year max limit on the time
   * that a workflow execution can run. An execution start-to-close timeout must be specified either
   * through this parameter or as a default when the workflow t
   */
  executionStartToCloseTimeout?: string;
  /**
   * The list of tags to associate with the workflow execution. You can specify a maximum of 5 tags.
   * You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or
   * ListClosedWorkflowExecutions and specifying a TagFilter.
   */
  tagList?: string[];
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
   * If set, specifies the policy to use for the child workflow executions of this workflow
   * execution if it is terminated, by calling the TerminateWorkflowExecution action explicitly or
   * due to an expired timeout. This policy overrides the default child policy specified when
   * registering the workflow type using RegisterWorkflowType. The supported child policies are:
   * TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is
   * attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its
   * history. It is up to the decider to take appropriate
   */
  childPolicy?: ChildPolicy7;
  /**
   * The IAM role to attach to this workflow execution. Executions of this workflow type need IAM
   * roles to invoke Lambda functions. If you don't attach an IAM role, any attempt to schedule a
   * Lambda task fails. This results in a ScheduleLambdaFunctionFailed history event. For more
   * information, see https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html
   * in the Amazon SWF Developer Guide.
   */
  lambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startWorkflowExecutionInputSchema: Schema<StartWorkflowExecutionInput> =
  s.object<StartWorkflowExecutionInput>(
    {
      domain: s.string(),
      workflowId: s.string(),
      workflowType: workflowTypeSchema,
      taskList: s.optional(s.lazy(() => taskListSchema)),
      taskPriority: s.optional(s.string()),
      input: s.optional(s.string()),
      executionStartToCloseTimeout: s.optional(s.string()),
      tagList: s.optional(s.array(s.string())),
      taskStartToCloseTimeout: s.optional(s.string()),
      childPolicy: s.optional(s.lazy(() => childPolicy7Schema)),
      lambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
