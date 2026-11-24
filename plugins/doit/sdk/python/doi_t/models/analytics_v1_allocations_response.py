from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .allocation_list_item import AllocationListItem, AllocationListItemDict


class AnalyticsV1AllocationsResponse(SdkBaseModel):
    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token, returned by a previous call, to request the next page of results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Total number of allocations in the result set."""

    allocations: Optional[list[AllocationListItem]] = UNSET


class AnalyticsV1AllocationsResponseDict(TypedDict):
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    allocations: NotRequired[list[AllocationListItemDict]]
