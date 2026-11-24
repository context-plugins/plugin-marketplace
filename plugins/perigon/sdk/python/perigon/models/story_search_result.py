from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .news_cluster import NewsCluster, NewsClusterDict


class StorySearchResult(SdkBaseModel):
    """Story search result"""

    status: int
    num_results: int = Field(alias="numResults")
    results: list[NewsCluster]


class StorySearchResultDict(TypedDict):
    status: int
    num_results: int
    results: list[NewsClusterDict]
