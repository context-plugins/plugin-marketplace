from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .scored_data_article import ScoredDataArticle, ScoredDataArticleDict


class ArticlesVectorSearchResult(SdkBaseModel):
    """Articles vector search result"""

    status: int
    results: list[ScoredDataArticle]


class ArticlesVectorSearchResultDict(TypedDict):
    status: int
    results: list[ScoredDataArticleDict]
