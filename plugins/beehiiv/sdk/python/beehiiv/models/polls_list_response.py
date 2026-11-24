from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .poll import Poll, PollDict


class PollsListResponse(SdkBaseModel):
    data: list[Poll]
    """An array of polls."""

    limit: Optional[int] = UNSET
    """The limit placed on the results. If no limit was specified in the request, this defaults to 10."""

    page: int = 1
    """**Offset pagination only**: The page number the results are from. Only present when using deprecated offset-based
    pagination."""

    total_pages: Optional[int] = UNSET
    """**Offset pagination only**: The total number of pages. Only present when using deprecated offset-based
    pagination."""

    has_more: Optional[bool] = UNSET
    """**Cursor pagination only**: Indicates whether there are more results available after the current page. Only
    present when using cursor-based pagination."""

    next_cursor: Optional[str] = UNSET
    """**Cursor pagination only**: The cursor token to use for fetching the next page of results. This will be null if
    has_more is false. Only present when using cursor-based pagination."""

    total_results: Optional[int] = UNSET
    """The total number of results from all pages."""


class PollsListResponseDict(TypedDict):
    data: list[PollDict]
    limit: NotRequired[int]
    page: NotRequired[int]
    total_pages: NotRequired[int]
    has_more: NotRequired[bool]
    next_cursor: NotRequired[str]
    total_results: NotRequired[int]
