from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.child_policy6 import ChildPolicy6OrStr
from .task_list import TaskList, TaskListDict
from .workflow_type import WorkflowType, WorkflowTypeDict


class StartChildWorkflowExecutionInitiatedEventAttributes(SdkBaseModel):
    workflow_id: str = Field(alias="workflowId")
    """The workflowId of the child workflow execution."""

    workflow_type: WorkflowType = Field(alias="workflowType")
    control: Optional[str] = UNSET
    """Data attached to the event that can be used by the decider in subsequent decision tasks. This data isn't sent to
    the activity."""

    input: Optional[str] = UNSET
    """The inputs provided to the child workflow execution."""

    execution_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="executionStartToCloseTimeout")
    """The maximum duration for the child workflow execution. If the workflow execution isn't closed within this
    duration, it is timed out and force-terminated. The duration is specified in seconds, an integer greater than or
    equal to 0. You can use NONE to specify unlimited duration."""

    task_list: TaskList = Field(alias="taskList")
    task_priority: Optional[str] = Field(default=UNSET, alias="taskPriority")
    """The priority assigned for the decision tasks for this workflow execution. Valid values are integers that range
    from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher
    priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer
    Guide."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the
    StartChildWorkflowExecution Decision to request this child workflow execution. This information can be useful for
    diagnosing problems by tracing back the cause of events."""

    child_policy: ChildPolicy6OrStr = Field(alias="childPolicy")
    """The policy to use for the child workflow executions if this execution gets terminated by explicitly calling the
    TerminateWorkflowExecution action or due to an expired timeout. The supported child policies are: TERMINATE – The
    child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by
    recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate
    actions when it receives an execution history with this event. ABANDON – No action is taken. The child executions
    continue to run."""

    task_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="taskStartToCloseTimeout")
    """The maximum duration allowed for the decision tasks for this workflow execution. The duration is specified in
    seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration."""

    tag_list: Optional[list[str]] = Field(default=UNSET, alias="tagList")
    """The list of tags to associated with the child workflow execution."""

    lambda_role: Optional[str] = Field(default=UNSET, alias="lambdaRole")
    """The IAM role to attach to the child workflow execution."""


class StartChildWorkflowExecutionInitiatedEventAttributesDict(TypedDict):
    workflow_id: str
    workflow_type: WorkflowTypeDict
    control: NotRequired[str]
    input: NotRequired[str]
    execution_start_to_close_timeout: NotRequired[str]
    task_list: TaskListDict
    task_priority: NotRequired[str]
    decision_task_completed_event_id: int
    child_policy: ChildPolicy6OrStr
    task_start_to_close_timeout: NotRequired[str]
    tag_list: NotRequired[list[str]]
    lambda_role: NotRequired[str]
