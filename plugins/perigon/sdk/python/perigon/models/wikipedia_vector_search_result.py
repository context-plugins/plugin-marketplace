from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .scored_data_wiki_data import ScoredDataWikiData, ScoredDataWikiDataDict


class WikipediaVectorSearchResult(SdkBaseModel):
    """Wikipedia vector search result"""

    status: int
    results: list[ScoredDataWikiData]


class WikipediaVectorSearchResultDict(TypedDict):
    status: int
    results: list[ScoredDataWikiDataDict]
