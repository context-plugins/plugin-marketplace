from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.child_policy2 import ChildPolicy2OrStr
from .task_list import TaskList, TaskListDict


class WorkflowExecutionConfiguration(SdkBaseModel):
    task_start_to_close_timeout: str = Field(alias="taskStartToCloseTimeout")
    """The maximum duration allowed for decision tasks for this workflow execution. The duration is specified in
    seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration."""

    execution_start_to_close_timeout: str = Field(alias="executionStartToCloseTimeout")
    """The total duration for this workflow execution. The duration is specified in seconds, an integer greater than or
    equal to 0. You can use NONE to specify unlimited duration."""

    task_list: TaskList = Field(alias="taskList")
    task_priority: Optional[str] = Field(default=UNSET, alias="taskPriority")
    """The priority assigned to decision tasks for this workflow execution. Valid values are integers that range from
    Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority.
    For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide."""

    child_policy: ChildPolicy2OrStr = Field(alias="childPolicy")
    """The policy to use for the child workflow executions if this workflow execution is terminated, by calling the
    TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are:
    TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
    execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
    appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child
    executions continue to run."""

    lambda_role: Optional[str] = Field(default=UNSET, alias="lambdaRole")
    """The IAM role attached to the child workflow execution."""


class WorkflowExecutionConfigurationDict(TypedDict):
    task_start_to_close_timeout: str
    execution_start_to_close_timeout: str
    task_list: TaskListDict
    task_priority: NotRequired[str]
    child_policy: ChildPolicy2OrStr
    lambda_role: NotRequired[str]
