from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .execution_time_filter import ExecutionTimeFilter, ExecutionTimeFilterDict
from .tag_filter import TagFilter, TagFilterDict
from .workflow_execution_filter import WorkflowExecutionFilter, WorkflowExecutionFilterDict
from .workflow_type_filter import WorkflowTypeFilter, WorkflowTypeFilterDict


class ListOpenWorkflowExecutionsInput(SdkBaseModel):
    domain: str
    """The name of the domain that contains the workflow executions to list."""

    start_time_filter: ExecutionTimeFilter = Field(alias="startTimeFilter")
    type_filter: Optional[WorkflowTypeFilter] = Field(default=UNSET, alias="typeFilter")
    tag_filter: Optional[TagFilter] = Field(default=UNSET, alias="tagFilter")
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination
    token for each page. Make the call again using the returned token to retrieve the next page. Keep all other
    arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a
    400 error: "Specified token has exceeded its maximum lifetime". The configured maximumPageSize determines how many
    results can be returned in a single call."""

    maximum_page_size: Optional[int] = Field(default=UNSET, alias="maximumPageSize")
    """The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of
    results."""

    reverse_order: Optional[bool] = Field(default=UNSET, alias="reverseOrder")
    """When set to true, returns the results in reverse order. By default the results are returned in descending order
    of the start time of the executions."""

    execution_filter: Optional[WorkflowExecutionFilter] = Field(default=UNSET, alias="executionFilter")


class ListOpenWorkflowExecutionsInputDict(TypedDict):
    domain: str
    start_time_filter: ExecutionTimeFilterDict
    type_filter: NotRequired[WorkflowTypeFilterDict]
    tag_filter: NotRequired[TagFilterDict]
    next_page_token: NotRequired[str]
    maximum_page_size: NotRequired[int]
    reverse_order: NotRequired[bool]
    execution_filter: NotRequired[WorkflowExecutionFilterDict]
