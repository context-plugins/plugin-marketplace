from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .complimentary_access import ComplimentaryAccess, ComplimentaryAccessDict


class IndexComplimentaryAccessResponse(SdkBaseModel):
    data: list[ComplimentaryAccess]
    limit: Optional[int] = UNSET
    """The limit placed on the results. Defaults to 10 if not specified."""

    has_more: Optional[bool] = UNSET
    """Indicates whether there are more results available after the current page."""

    next_cursor: Optional[str] = UNSET
    """The cursor token to use for fetching the next page of results. This will be null if has_more is false."""

    total_results: Optional[int] = UNSET
    """The total number of results from all pages."""


class IndexComplimentaryAccessResponseDict(TypedDict):
    data: list[ComplimentaryAccessDict]
    limit: NotRequired[int]
    has_more: NotRequired[bool]
    next_cursor: NotRequired[str]
    total_results: NotRequired[int]
