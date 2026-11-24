from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.child_policy2 import ChildPolicy2OrStr
from .task_list import TaskList, TaskListDict
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict
from .workflow_type import WorkflowType, WorkflowTypeDict


class WorkflowExecutionStartedEventAttributes(SdkBaseModel):
    input: Optional[str] = UNSET
    """The input provided to the workflow execution."""

    execution_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="executionStartToCloseTimeout")
    """The maximum duration for this workflow execution. The duration is specified in seconds, an integer greater than
    or equal to 0. You can use NONE to specify unlimited duration."""

    task_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="taskStartToCloseTimeout")
    """The maximum duration of decision tasks for this workflow type. The duration is specified in seconds, an integer
    greater than or equal to 0. You can use NONE to specify unlimited duration."""

    child_policy: ChildPolicy2OrStr = Field(alias="childPolicy")
    """The policy to use for the child workflow executions if this workflow execution is terminated, by calling the
    TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are:
    TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
    execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
    appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child
    executions continue to run."""

    task_list: TaskList = Field(alias="taskList")
    task_priority: Optional[str] = Field(default=UNSET, alias="taskPriority")
    """The priority of the decision tasks in the workflow execution."""

    workflow_type: WorkflowType = Field(alias="workflowType")
    tag_list: Optional[list[str]] = Field(default=UNSET, alias="tagList")
    """The list of tags associated with this workflow execution. An execution can have up to 5 tags."""

    continued_execution_run_id: Optional[str] = Field(default=UNSET, alias="continuedExecutionRunId")
    """If this workflow execution was started due to a ContinueAsNewWorkflowExecution decision, then it contains the
    runId of the previous workflow execution that was closed and continued as this execution."""

    parent_workflow_execution: Optional[WorkflowExecution] = Field(default=UNSET, alias="parentWorkflowExecution")
    parent_initiated_event_id: Optional[int] = Field(default=UNSET, alias="parentInitiatedEventId")
    """The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution
    Decision to start this workflow execution. The source event with this ID can be found in the history of the source
    workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events
    leading up to this event."""

    lambda_role: Optional[str] = Field(default=UNSET, alias="lambdaRole")
    """The IAM role attached to the workflow execution."""


class WorkflowExecutionStartedEventAttributesDict(TypedDict):
    input: NotRequired[str]
    execution_start_to_close_timeout: NotRequired[str]
    task_start_to_close_timeout: NotRequired[str]
    child_policy: ChildPolicy2OrStr
    task_list: TaskListDict
    task_priority: NotRequired[str]
    workflow_type: WorkflowTypeDict
    tag_list: NotRequired[list[str]]
    continued_execution_run_id: NotRequired[str]
    parent_workflow_execution: NotRequired[WorkflowExecutionDict]
    parent_initiated_event_id: NotRequired[int]
    lambda_role: NotRequired[str]
