from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.default_child_policy import DefaultChildPolicyOrStr
from .task_list import TaskList, TaskListDict


class RegisterWorkflowTypeInput(SdkBaseModel):
    domain: str
    """The name of the domain in which to register the workflow type."""

    name: str
    r"""The name of the workflow type. The specified string must not contain a : (colon), / (slash), | (vertical bar),
    or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn."""

    version: str
    r"""The version of the workflow type. The workflow type consists of the name and version, the combination of which
    must be unique within the domain. To get a list of all currently registered workflow types, use the
    ListWorkflowTypes action. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any
    control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn."""

    description: Optional[str] = UNSET
    """Textual description of the workflow type."""

    default_task_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="defaultTaskStartToCloseTimeout")
    """If set, specifies the default maximum duration of decision tasks for this workflow type. This default can be
    overridden when starting a workflow execution using the StartWorkflowExecution action or the
    StartChildWorkflowExecution Decision. The duration is specified in seconds, an integer greater than or equal to 0.
    You can use NONE to specify unlimited duration."""

    default_execution_start_to_close_timeout: Optional[str] = Field(
        default=UNSET, alias="defaultExecutionStartToCloseTimeout"
    )
    """If set, specifies the default maximum duration for executions of this workflow type. You can override this
    default when starting an execution through the StartWorkflowExecution Action or StartChildWorkflowExecution
    Decision. The duration is specified in seconds; an integer greater than or equal to 0. Unlike some of the other
    timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for defaultExecutionStartToCloseTimeout;
    there is a one-year max limit on the time that a workflow execution can run. Exceeding this limit always causes the
    workflow execution to time out."""

    default_task_list: Optional[TaskList] = Field(default=UNSET, alias="defaultTaskList")
    default_task_priority: Optional[str] = Field(default=UNSET, alias="defaultTaskPriority")
    """The default task priority to assign to the workflow type. If not assigned, then 0 is used. Valid values are
    integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers
    indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon
    SWF Developer Guide."""

    default_child_policy: Optional[DefaultChildPolicyOrStr] = Field(default=UNSET, alias="defaultChildPolicy")
    """If set, specifies the default policy to use for the child workflow executions when a workflow execution of this
    type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This
    default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the
    StartChildWorkflowExecution Decision. The supported child policies are: TERMINATE – The child executions are
    terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a
    WorkflowExecutionCancelRequested event in its history."""

    default_lambda_role: Optional[str] = Field(default=UNSET, alias="defaultLambdaRole")
    """The default IAM role attached to this workflow type. Executions of this workflow type need IAM roles to invoke
    Lambda functions. If you don't specify an IAM role when you start this workflow type, the default Lambda role is
    attached to the execution. For more information, see
    https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html in the Amazon SWF Developer Guide."""


class RegisterWorkflowTypeInputDict(TypedDict):
    domain: str
    name: str
    version: str
    description: NotRequired[str]
    default_task_start_to_close_timeout: NotRequired[str]
    default_execution_start_to_close_timeout: NotRequired[str]
    default_task_list: NotRequired[TaskListDict]
    default_task_priority: NotRequired[str]
    default_child_policy: NotRequired[DefaultChildPolicyOrStr]
    default_lambda_role: NotRequired[str]
