import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultChildPolicySchema, type DefaultChildPolicy } from "./default-child-policy.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type RegisterWorkflowTypeInput = {
  /** The name of the domain in which to register the workflow type. */
  domain: string;
  /**
   * The name of the workflow type. The specified string must not contain a : (colon), / (slash), |
   * (vertical bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be
   * the literal string arn.
   */
  name: string;
  /**
   * The version of the workflow type. The workflow type consists of the name and version, the
   * combination of which must be unique within the domain. To get a list of all currently
   * registered workflow types, use the ListWorkflowTypes action. The specified string must not
   * contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f |
   * \u007f-\u009f). Also, it must not be the literal string arn.
   */
  version: string;
  /** Textual description of the workflow type. */
  description?: string;
  /**
   * If set, specifies the default maximum duration of decision tasks for this workflow type. This
   * default can be overridden when starting a workflow execution using the StartWorkflowExecution
   * action or the StartChildWorkflowExecution Decision. The duration is specified in seconds, an
   * integer greater than or equal to 0. You can use NONE to specify unlimited duration.
   */
  defaultTaskStartToCloseTimeout?: string;
  /**
   * If set, specifies the default maximum duration for executions of this workflow type. You can
   * override this default when starting an execution through the StartWorkflowExecution Action or
   * StartChildWorkflowExecution Decision. The duration is specified in seconds; an integer greater
   * than or equal to 0. Unlike some of the other timeout parameters in Amazon SWF, you cannot
   * specify a value of "NONE" for defaultExecutionStartToCloseTimeout; there is a one-year max
   * limit on the time that a workflow execution can run. Exceeding this limit always causes the
   * workflow execution to time out.
   */
  defaultExecutionStartToCloseTimeout?: string;
  defaultTaskList?: TaskList;
  /**
   * The default task priority to assign to the workflow type. If not assigned, then 0 is used.
   * Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to
   * Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information
   * about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
   */
  defaultTaskPriority?: string;
  /**
   * If set, specifies the default policy to use for the child workflow executions when a workflow
   * execution of this type is terminated, by calling the TerminateWorkflowExecution action
   * explicitly or due to an expired timeout. This default can be overridden when starting a
   * workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution
   * Decision. The supported child policies are: TERMINATE – The child executions are terminated.
   * REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a
   * WorkflowExecutionCancelRequested event in its history.
   */
  defaultChildPolicy?: DefaultChildPolicy;
  /**
   * The default IAM role attached to this workflow type. Executions of this workflow type need IAM
   * roles to invoke Lambda functions. If you don't specify an IAM role when you start this workflow
   * type, the default Lambda role is attached to the execution. For more information, see
   * https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html in the Amazon SWF
   * Developer Guide.
   */
  defaultLambdaRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registerWorkflowTypeInputSchema: Schema<RegisterWorkflowTypeInput> =
  s.object<RegisterWorkflowTypeInput>(
    {
      domain: s.string(),
      name: s.string(),
      version: s.string(),
      description: s.optional(s.string()),
      defaultTaskStartToCloseTimeout: s.optional(s.string()),
      defaultExecutionStartToCloseTimeout: s.optional(s.string()),
      defaultTaskList: s.optional(s.lazy(() => taskListSchema)),
      defaultTaskPriority: s.optional(s.string()),
      defaultChildPolicy: s.optional(s.lazy(() => defaultChildPolicySchema)),
      defaultLambdaRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
