from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .wiki_page import WikiPage, WikiPageDict


class WikipediaSearchResult(SdkBaseModel):
    """Wikipedia search result"""

    status: int
    num_results: int = Field(alias="numResults")
    results: list[WikiPage]


class WikipediaSearchResultDict(TypedDict):
    status: int
    num_results: int
    results: list[WikiPageDict]
