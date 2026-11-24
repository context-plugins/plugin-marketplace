from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation_email import AutomationEmail, AutomationEmailDict


class AutomationEmailsListResponse(SdkBaseModel):
    data: list[AutomationEmail]
    limit: Optional[int] = UNSET
    """The limit placed on the results. If no limit was specified in the request, this defaults to 10."""

    has_more: Optional[bool] = UNSET
    """**Cursor pagination only**: Indicates whether there are more results available after the current page."""

    next_cursor: Optional[str] = UNSET
    """**Cursor pagination only**: The cursor token to use for fetching the next page of results. This will be null if
    has_more is false."""

    page: int = 1
    """**Offset pagination only**: The page number the results are from. Only present when using deprecated offset-based
    pagination."""

    total_results: Optional[int] = UNSET
    """The total number of results from all pages."""

    total_pages: Optional[int] = UNSET
    """The total number of pages."""


class AutomationEmailsListResponseDict(TypedDict):
    data: list[AutomationEmailDict]
    limit: NotRequired[int]
    has_more: NotRequired[bool]
    next_cursor: NotRequired[str]
    page: NotRequired[int]
    total_results: NotRequired[int]
    total_pages: NotRequired[int]
