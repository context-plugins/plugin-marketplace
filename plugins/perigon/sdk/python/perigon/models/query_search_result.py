from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .article import Article, ArticleDict


class QuerySearchResult(SdkBaseModel):
    status: int
    num_results: int = Field(alias="numResults")
    articles: list[Article]


class QuerySearchResultDict(TypedDict):
    status: int
    num_results: int
    articles: list[ArticleDict]
