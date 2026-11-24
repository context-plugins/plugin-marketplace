from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .list_monitored_resources_filters import ListMonitoredResourcesFilters, ListMonitoredResourcesFiltersDict


class MonitoredResourcesRequest(SdkBaseModel):
    filters: Optional[ListMonitoredResourcesFilters] = Field(default=UNSET, alias="Filters")
    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return with a single call. To retrieve the remaining results, make another call
    with the returned nextToken value."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If this value is null, it
    retrieves the first page."""


class MonitoredResourcesRequestDict(TypedDict):
    filters: NotRequired[ListMonitoredResourcesFiltersDict]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
