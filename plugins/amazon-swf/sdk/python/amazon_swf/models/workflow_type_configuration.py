from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.default_child_policy1 import DefaultChildPolicy1OrStr
from .task_list import TaskList, TaskListDict


class WorkflowTypeConfiguration(SdkBaseModel):
    default_task_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="defaultTaskStartToCloseTimeout")
    """The default maximum duration, specified when registering the workflow type, that a decision task for executions
    of this workflow type might take before returning completion or failure. If the task doesn'tdo close in the
    specified time then the task is automatically timed out and rescheduled. If the decider eventually reports a
    completion or failure, it is ignored. This default can be overridden when starting a workflow execution using the
    StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The duration is specified in seconds, an
    integer greater than or equal to 0. You c"""

    default_execution_start_to_close_timeout: Optional[str] = Field(
        default=UNSET, alias="defaultExecutionStartToCloseTimeout"
    )
    """The default maximum duration, specified when registering the workflow type, for executions of this workflow type.
    This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the
    StartChildWorkflowExecution Decision. The duration is specified in seconds, an integer greater than or equal to 0.
    You can use NONE to specify unlimited duration."""

    default_task_list: Optional[TaskList] = Field(default=UNSET, alias="defaultTaskList")
    default_task_priority: Optional[str] = Field(default=UNSET, alias="defaultTaskPriority")
    """The default task priority, specified when registering the workflow type, for all decision tasks of this workflow
    type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or
    the StartChildWorkflowExecution decision. Valid values are integers that range from Java's Integer.MIN_VALUE
    (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about
    setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide."""

    default_child_policy: Optional[DefaultChildPolicy1OrStr] = Field(default=UNSET, alias="defaultChildPolicy")
    """The default policy to use for the child workflow executions when a workflow execution of this type is terminated,
    by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be
    overridden when starting a workflow execution using the StartWorkflowExecution action or the
    StartChildWorkflowExecution Decision. The supported child policies are: TERMINATE – The child executions are
    terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a
    WorkflowExecutionCancelRequested event in its history. It is up to the d"""

    default_lambda_role: Optional[str] = Field(default=UNSET, alias="defaultLambdaRole")
    """The default IAM role attached to this workflow type. Executions of this workflow type need IAM roles to invoke
    Lambda functions. If you don't specify an IAM role when starting this workflow type, the default Lambda role is
    attached to the execution. For more information, see
    https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html in the Amazon SWF Developer Guide."""


class WorkflowTypeConfigurationDict(TypedDict):
    default_task_start_to_close_timeout: NotRequired[str]
    default_execution_start_to_close_timeout: NotRequired[str]
    default_task_list: NotRequired[TaskListDict]
    default_task_priority: NotRequired[str]
    default_child_policy: NotRequired[DefaultChildPolicy1OrStr]
    default_lambda_role: NotRequired[str]
