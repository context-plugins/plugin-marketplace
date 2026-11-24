from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .news_search_query_info import NewsSearchQueryInfo, NewsSearchQueryInfoDict
from .rich_news_article import RichNewsArticle, RichNewsArticleDict


class NewsSearchPage(SdkBaseModel):
    results: list[RichNewsArticle]
    """Feed items in rank order, each with ``search_match``."""

    next_cursor: OptionalNullable[str] = UNSET
    """Pass back as ``cursor`` for the next page; ``null`` past the 200-match bound."""

    count: int
    """Items on this page."""

    matched: int
    """Visible matches in the bounded candidate set (at most 200); never a global total."""

    query: NewsSearchQueryInfo
    """How ``/api/news/search/`` read the query."""


class NewsSearchPageDict(TypedDict):
    results: list[RichNewsArticleDict]
    next_cursor: NotRequired[str | None]
    count: int
    matched: int
    query: NewsSearchQueryInfoDict
