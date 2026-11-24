from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .iteration_slim import IterationSlim, IterationSlimDict


class IterationSearchResults(SdkBaseModel):
    """The results of the Iteration search query."""

    model_config = ConfigDict(extra="forbid")

    total: int
    """The total number of matches for the search query. The first 1000 matches can be paged through via the API."""

    data: list[IterationSlim]
    """A list of search results."""

    next: str | None
    """The URL path and query string for the next page of search results."""


class IterationSearchResultsDict(TypedDict):
    total: int
    data: list[IterationSlimDict]
    next: str | None
