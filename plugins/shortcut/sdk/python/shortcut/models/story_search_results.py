from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .story_search_result import StorySearchResult, StorySearchResultDict


class StorySearchResults(SdkBaseModel):
    """The results of the Story search query."""

    model_config = ConfigDict(extra="forbid")

    total: int
    """The total number of matches for the search query. The first 1000 matches can be paged through via the API."""

    data: list[StorySearchResult]
    """A list of search results."""

    next: str | None
    """The URL path and query string for the next page of search results."""


class StorySearchResultsDict(TypedDict):
    total: int
    data: list[StorySearchResultDict]
    next: str | None
