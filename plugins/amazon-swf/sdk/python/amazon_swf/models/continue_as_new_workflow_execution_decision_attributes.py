from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.child_policy import ChildPolicyOrStr
from .task_list import TaskList, TaskListDict


class ContinueAsNewWorkflowExecutionDecisionAttributes(SdkBaseModel):
    input: Optional[str] = UNSET
    """The input provided to the new workflow execution."""

    execution_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="executionStartToCloseTimeout")
    """If set, specifies the total duration for this workflow execution. This overrides the
    defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration is specified in
    seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration. An execution
    start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or
    through this field. If neither this field is set nor a default execution start-to-close timeout was specified at
    registration time then a fault is returned."""

    task_list: Optional[TaskList] = Field(default=UNSET, alias="taskList")
    task_priority: Optional[str] = Field(default=UNSET, alias="taskPriority")
    """The task priority that, if set, specifies the priority for the decision tasks for this workflow execution. This
    overrides the defaultTaskPriority specified when registering the workflow type. Valid values are integers that range
    from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher
    priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer
    Guide."""

    task_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="taskStartToCloseTimeout")
    """Specifies the maximum duration of decision tasks for the new workflow execution. This parameter overrides the
    defaultTaskStartToCloseTimout specified when registering the workflow type using RegisterWorkflowType. The duration
    is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration. A
    task start-to-close timeout for the new workflow execution must be specified either as a default for the workflow
    type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was
    specified at registration time then"""

    child_policy: Optional[ChildPolicyOrStr] = Field(default=UNSET, alias="childPolicy")
    """If set, specifies the policy to use for the child workflow executions of the new execution if it is terminated by
    calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the
    default child policy specified when registering the workflow type using RegisterWorkflowType. The supported child
    policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for
    each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider
    to take appropriate actions"""

    tag_list: Optional[list[str]] = Field(default=UNSET, alias="tagList")
    """The list of tags to associate with the new workflow execution. A maximum of 5 tags can be specified. You can list
    workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and
    specifying a TagFilter."""

    workflow_type_version: Optional[str] = Field(default=UNSET, alias="workflowTypeVersion")
    """The version of the workflow to start."""

    lambda_role: Optional[str] = Field(default=UNSET, alias="lambdaRole")
    """The IAM role to attach to the new (continued) execution."""


class ContinueAsNewWorkflowExecutionDecisionAttributesDict(TypedDict):
    input: NotRequired[str]
    execution_start_to_close_timeout: NotRequired[str]
    task_list: NotRequired[TaskListDict]
    task_priority: NotRequired[str]
    task_start_to_close_timeout: NotRequired[str]
    child_policy: NotRequired[ChildPolicyOrStr]
    tag_list: NotRequired[list[str]]
    workflow_type_version: NotRequired[str]
    lambda_role: NotRequired[str]
