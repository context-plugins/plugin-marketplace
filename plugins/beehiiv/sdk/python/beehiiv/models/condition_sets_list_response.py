from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .condition_set_list_item import ConditionSetListItem, ConditionSetListItemDict


class ConditionSetsListResponse(SdkBaseModel):
    data: list[ConditionSetListItem]
    """An array of condition sets."""

    limit: Optional[int] = UNSET
    """The limit placed on the results. If no limit was specified in the request, this defaults to 10."""

    has_more: Optional[bool] = UNSET
    """**Cursor pagination only**: Indicates whether there are more results available after the current page. Only
    present when using cursor-based pagination."""

    next_cursor: Optional[str] = UNSET
    """**Cursor pagination only**: The cursor token to use for fetching the next page of results. This will be null if
    has_more is false. Only present when using cursor-based pagination."""

    total_results: Optional[int] = UNSET
    """The total number of results from all pages."""


class ConditionSetsListResponseDict(TypedDict):
    data: list[ConditionSetListItemDict]
    limit: NotRequired[int]
    has_more: NotRequired[bool]
    next_cursor: NotRequired[str]
    total_results: NotRequired[int]
