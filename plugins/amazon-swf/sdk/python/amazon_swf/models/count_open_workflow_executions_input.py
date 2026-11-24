from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .execution_time_filter import ExecutionTimeFilter, ExecutionTimeFilterDict
from .tag_filter import TagFilter, TagFilterDict
from .workflow_execution_filter import WorkflowExecutionFilter, WorkflowExecutionFilterDict
from .workflow_type_filter import WorkflowTypeFilter, WorkflowTypeFilterDict


class CountOpenWorkflowExecutionsInput(SdkBaseModel):
    domain: str
    """The name of the domain containing the workflow executions to count."""

    start_time_filter: ExecutionTimeFilter = Field(alias="startTimeFilter")
    type_filter: Optional[WorkflowTypeFilter] = Field(default=UNSET, alias="typeFilter")
    tag_filter: Optional[TagFilter] = Field(default=UNSET, alias="tagFilter")
    execution_filter: Optional[WorkflowExecutionFilter] = Field(default=UNSET, alias="executionFilter")


class CountOpenWorkflowExecutionsInputDict(TypedDict):
    domain: str
    start_time_filter: ExecutionTimeFilterDict
    type_filter: NotRequired[WorkflowTypeFilterDict]
    tag_filter: NotRequired[TagFilterDict]
    execution_filter: NotRequired[WorkflowExecutionFilterDict]
