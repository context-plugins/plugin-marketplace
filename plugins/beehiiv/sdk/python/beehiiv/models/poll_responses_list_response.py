from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .poll_response_item import PollResponseItem, PollResponseItemDict


class PollResponsesListResponse(SdkBaseModel):
    data: list[PollResponseItem]
    """An array of poll responses."""

    limit: Optional[int] = UNSET
    """The limit placed on the results. If no limit was specified in the request, this defaults to 10."""

    page: int = 1
    """**Offset pagination only**: The page number the results are from. Only present when using deprecated offset-based
    pagination."""

    total_pages: Optional[int] = UNSET
    """**Offset pagination only**: The total number of pages. Only present when using deprecated offset-based
    pagination."""

    has_more: Optional[bool] = UNSET
    """**Cursor pagination only**: Indicates whether there are more results available after the current page."""

    next_cursor: Optional[str] = UNSET
    """**Cursor pagination only**: The cursor token to use for fetching the next page of results."""

    total_results: Optional[int] = UNSET
    """The total number of results from all pages."""


class PollResponsesListResponseDict(TypedDict):
    data: list[PollResponseItemDict]
    limit: NotRequired[int]
    page: NotRequired[int]
    total_pages: NotRequired[int]
    has_more: NotRequired[bool]
    next_cursor: NotRequired[str]
    total_results: NotRequired[int]
