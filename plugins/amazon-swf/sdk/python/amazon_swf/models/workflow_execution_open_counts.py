from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkflowExecutionOpenCounts(SdkBaseModel):
    open_activity_tasks: int = Field(alias="openActivityTasks")
    """The count of activity tasks whose status is OPEN."""

    open_decision_tasks: int = Field(alias="openDecisionTasks")
    """The count of decision tasks whose status is OPEN. A workflow execution can have at most one open decision
    task."""

    open_timers: int = Field(alias="openTimers")
    """The count of timers started by this workflow execution that have not fired yet."""

    open_child_workflow_executions: int = Field(alias="openChildWorkflowExecutions")
    """The count of child workflow executions whose status is OPEN."""

    open_lambda_functions: Optional[int] = Field(default=UNSET, alias="openLambdaFunctions")
    """The count of Lambda tasks whose status is OPEN."""


class WorkflowExecutionOpenCountsDict(TypedDict):
    open_activity_tasks: int
    open_decision_tasks: int
    open_timers: int
    open_child_workflow_executions: int
    open_lambda_functions: NotRequired[int]
