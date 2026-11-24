from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.child_policy4 import ChildPolicy4OrStr
from .task_list import TaskList, TaskListDict
from .workflow_type import WorkflowType, WorkflowTypeDict


class WorkflowExecutionContinuedAsNewEventAttributes(SdkBaseModel):
    input: Optional[str] = UNSET
    """The input provided to the new workflow execution."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the
    ContinueAsNewWorkflowExecution decision that started this execution. This information can be useful for diagnosing
    problems by tracing back the chain of events leading up to this event."""

    new_execution_run_id: str = Field(alias="newExecutionRunId")
    """The runId of the new workflow execution."""

    execution_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="executionStartToCloseTimeout")
    """The total duration allowed for the new workflow execution. The duration is specified in seconds, an integer
    greater than or equal to 0. You can use NONE to specify unlimited duration."""

    task_list: TaskList = Field(alias="taskList")
    task_priority: Optional[str] = Field(default=UNSET, alias="taskPriority")
    """The priority of the task to use for the decisions of the new (continued) workflow execution."""

    task_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="taskStartToCloseTimeout")
    """The maximum duration of decision tasks for the new workflow execution. The duration is specified in seconds, an
    integer greater than or equal to 0. You can use NONE to specify unlimited duration."""

    child_policy: ChildPolicy4OrStr = Field(alias="childPolicy")
    """The policy to use for the child workflow executions of the new execution if it is terminated by calling the
    TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are:
    TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
    execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
    appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child
    executions continue to run."""

    tag_list: Optional[list[str]] = Field(default=UNSET, alias="tagList")
    """The list of tags associated with the new workflow execution."""

    workflow_type: WorkflowType = Field(alias="workflowType")
    lambda_role: Optional[str] = Field(default=UNSET, alias="lambdaRole")
    """The IAM role to attach to the new (continued) workflow execution."""


class WorkflowExecutionContinuedAsNewEventAttributesDict(TypedDict):
    input: NotRequired[str]
    decision_task_completed_event_id: int
    new_execution_run_id: str
    execution_start_to_close_timeout: NotRequired[str]
    task_list: TaskListDict
    task_priority: NotRequired[str]
    task_start_to_close_timeout: NotRequired[str]
    child_policy: ChildPolicy4OrStr
    tag_list: NotRequired[list[str]]
    workflow_type: WorkflowTypeDict
    lambda_role: NotRequired[str]
