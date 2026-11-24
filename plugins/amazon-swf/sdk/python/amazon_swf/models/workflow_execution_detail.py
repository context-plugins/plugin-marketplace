from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .workflow_execution_configuration import WorkflowExecutionConfiguration, WorkflowExecutionConfigurationDict
from .workflow_execution_info import WorkflowExecutionInfo, WorkflowExecutionInfoDict
from .workflow_execution_open_counts import WorkflowExecutionOpenCounts, WorkflowExecutionOpenCountsDict


class WorkflowExecutionDetail(SdkBaseModel):
    execution_info: WorkflowExecutionInfo = Field(alias="executionInfo")
    execution_configuration: WorkflowExecutionConfiguration = Field(alias="executionConfiguration")
    open_counts: WorkflowExecutionOpenCounts = Field(alias="openCounts")
    latest_activity_task_timestamp: Optional[RFC3339DateTime] = Field(
        default=UNSET, alias="latestActivityTaskTimestamp"
    )
    """The time when the last activity task was scheduled for this workflow execution. You can use this information to
    determine if the workflow has not made progress for an unusually long period of time and might require a corrective
    action."""

    latest_execution_context: Optional[str] = Field(default=UNSET, alias="latestExecutionContext")
    """The latest executionContext provided by the decider for this workflow execution. A decider can provide an
    executionContext (a free-form string) when closing a decision task using RespondDecisionTaskCompleted."""


class WorkflowExecutionDetailDict(TypedDict):
    execution_info: WorkflowExecutionInfoDict
    execution_configuration: WorkflowExecutionConfigurationDict
    open_counts: WorkflowExecutionOpenCountsDict
    latest_activity_task_timestamp: NotRequired[RFC3339DateTime]
    latest_execution_context: NotRequired[str]
