from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .route_filters import RouteFilters, RouteFiltersDict


class ListVirtualInterfaceRoutesRequest(SdkBaseModel):
    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    filters: Optional[RouteFilters] = UNSET
    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return with a single call. To retrieve the remaining results, make another call
    with the returned nextToken value. If MaxResults is given a value larger than 100, only 100 results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token for the next page of results."""


class ListVirtualInterfaceRoutesRequestDict(TypedDict):
    virtual_interface_id: NotRequired[str]
    filters: NotRequired[RouteFiltersDict]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
