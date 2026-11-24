import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultChildPolicy1Schema, type DefaultChildPolicy1 } from "./default-child-policy1.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type WorkflowTypeConfiguration = {
  /**
   * The default maximum duration, specified when registering the workflow type, that a decision
   * task for executions of this workflow type might take before returning completion or failure. If
   * the task doesn'tdo close in the specified time then the task is automatically timed out and
   * rescheduled. If the decider eventually reports a completion or failure, it is ignored. This
   * default can be overridden when starting a workflow execution using the StartWorkflowExecution
   * action or the StartChildWorkflowExecution Decision. The duration is specified in seconds, an
   * integer greater than or equal to 0. You c
   */
  defaultTaskStartToCloseTimeout?: string;
  /**
   * The default maximum duration, specified when registering the workflow type, for executions of
   * this workflow type. This default can be overridden when starting a workflow execution using the
   * StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The duration is
   * specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
   * unlimited duration.
   */
  defaultExecutionStartToCloseTimeout?: string;
  defaultTaskList?: TaskList;
  /**
   * The default task priority, specified when registering the workflow type, for all decision tasks
   * of this workflow type. This default can be overridden when starting a workflow execution using
   * the StartWorkflowExecution action or the StartChildWorkflowExecution decision. Valid values are
   * integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE
   * (2147483647). Higher numbers indicate higher priority. For more information about setting task
   * priority, see Setting Task Priority in the Amazon SWF Developer Guide.
   */
  defaultTaskPriority?: string;
  /**
   * The default policy to use for the child workflow executions when a workflow execution of this
   * type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an
   * expired timeout. This default can be overridden when starting a workflow execution using the
   * StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The supported child
   * policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to
   * cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested
   * event in its history. It is up to the d
   */
  defaultChildPolicy?: DefaultChildPolicy1;
  /**
   * The default IAM role attached to this workflow type. Executions of this workflow type need IAM
   * roles to invoke Lambda functions. If you don't specify an IAM role when starting this workflow
   * type, the default Lambda role is attached to the execution. For more information, see
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html in the Amazon SWF
   * Developer Guide.
   */
  defaultLambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowTypeConfigurationSchema: Schema<WorkflowTypeConfiguration> =
  s.object<WorkflowTypeConfiguration>(
    {
      defaultTaskStartToCloseTimeout: s.optional(s.string()),
      defaultExecutionStartToCloseTimeout: s.optional(s.string()),
      defaultTaskList: s.optional(s.lazy(() => taskListSchema)),
      defaultTaskPriority: s.optional(s.string()),
      defaultChildPolicy: s.optional(s.lazy(() => defaultChildPolicy1Schema)),
      defaultLambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
