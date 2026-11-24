from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .article import Article, ArticleDict


class SummarySearchResult(SdkBaseModel):
    status: int
    """HTTP status code for the response."""

    num_results: int = Field(alias="numResults")
    """Number of articles returned in results after applying returnedArticleCount."""

    summary: str
    """Generated summary of the selected articles, or 'No articles found' when no content matches."""

    results: list[Article]
    """Articles returned after summary generation, limited by returnedArticleCount."""


class SummarySearchResultDict(TypedDict):
    status: int
    num_results: int
    summary: str
    results: list[ArticleDict]
