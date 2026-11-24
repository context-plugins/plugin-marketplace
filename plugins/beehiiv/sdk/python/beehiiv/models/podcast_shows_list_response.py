from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .podcast_show import PodcastShow, PodcastShowDict


class PodcastShowsListResponse(SdkBaseModel):
    data: list[PodcastShow]
    """A list of podcasts for this publication."""

    limit: int
    """The limit placed on the results. If no limit was specified in the request, this defaults to 10."""

    has_more: bool
    """Indicates whether there are more results available after the current page."""

    next_cursor: Optional[str] = UNSET
    """The cursor token to use for fetching the next page of results. Null when has_more is false."""

    total_results: Optional[int] = UNSET
    """The total number of results from all pages."""


class PodcastShowsListResponseDict(TypedDict):
    data: list[PodcastShowDict]
    limit: int
    has_more: bool
    next_cursor: NotRequired[str]
    total_results: NotRequired[int]
