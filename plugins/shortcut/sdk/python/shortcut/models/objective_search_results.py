from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .objective_search_result import ObjectiveSearchResult, ObjectiveSearchResultDict


class ObjectiveSearchResults(SdkBaseModel):
    """The results of the Objective search query."""

    model_config = ConfigDict(extra="forbid")

    total: int
    """The total number of matches for the search query. The first 1000 matches can be paged through via the API."""

    data: list[ObjectiveSearchResult]
    """A list of search results."""

    next: str | None
    """The URL path and query string for the next page of search results."""


class ObjectiveSearchResultsDict(TypedDict):
    total: int
    data: list[ObjectiveSearchResultDict]
    next: str | None
