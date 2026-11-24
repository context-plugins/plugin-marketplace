from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .close_status_filter import CloseStatusFilter, CloseStatusFilterDict
from .execution_time_filter import ExecutionTimeFilter, ExecutionTimeFilterDict
from .tag_filter import TagFilter, TagFilterDict
from .workflow_execution_filter import WorkflowExecutionFilter, WorkflowExecutionFilterDict
from .workflow_type_filter import WorkflowTypeFilter, WorkflowTypeFilterDict


class CountClosedWorkflowExecutionsInput(SdkBaseModel):
    domain: str
    """The name of the domain containing the workflow executions to count."""

    start_time_filter: Optional[ExecutionTimeFilter] = Field(default=UNSET, alias="startTimeFilter")
    close_time_filter: Optional[ExecutionTimeFilter] = Field(default=UNSET, alias="closeTimeFilter")
    execution_filter: Optional[WorkflowExecutionFilter] = Field(default=UNSET, alias="executionFilter")
    type_filter: Optional[WorkflowTypeFilter] = Field(default=UNSET, alias="typeFilter")
    tag_filter: Optional[TagFilter] = Field(default=UNSET, alias="tagFilter")
    close_status_filter: Optional[CloseStatusFilter] = Field(default=UNSET, alias="closeStatusFilter")


class CountClosedWorkflowExecutionsInputDict(TypedDict):
    domain: str
    start_time_filter: NotRequired[ExecutionTimeFilterDict]
    close_time_filter: NotRequired[ExecutionTimeFilterDict]
    execution_filter: NotRequired[WorkflowExecutionFilterDict]
    type_filter: NotRequired[WorkflowTypeFilterDict]
    tag_filter: NotRequired[TagFilterDict]
    close_status_filter: NotRequired[CloseStatusFilterDict]
