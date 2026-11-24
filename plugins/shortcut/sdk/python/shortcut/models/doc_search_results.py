from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .doc_slim import DocSlim, DocSlimDict


class DocSearchResults(SdkBaseModel):
    """The results of the Document search query."""

    model_config = ConfigDict(extra="forbid")

    total: int
    """The total number of matches for the search query. The first 1000 matches can be paged through via the API."""

    data: list[DocSlim]
    """A list of document search results."""

    next: str | None
    """The URL path and query string for the next page of search results."""


class DocSearchResultsDict(TypedDict):
    total: int
    data: list[DocSlimDict]
    next: str | None
